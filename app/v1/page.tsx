// Index of every CV variant under /v1.

import type { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { VARIANTS } from "./variants"

const SERIF = "font-[family-name:var(--font-serif-cv)]"

export const metadata: Metadata = {
  title: "Ricardo Jorge: CV Variants",
  description:
    "Every variant of Ricardo Jorge's CV: the full version and role-focused two-page minis.",
  alternates: { canonical: "/v1" },
}

export default function Page() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-[50rem] px-6 py-16 sm:px-8 sm:py-24">
        <header>
          <h1
            className={cn(
              SERIF,
              "text-4xl/[1.1] font-medium tracking-tight text-balance sm:text-[2.75rem]/[1.1]"
            )}
          >
            Ricardo Jorge
          </h1>
          <p
            className={cn(
              SERIF,
              "mt-2.5 text-lg/snug text-pretty text-muted-foreground italic sm:text-xl/snug"
            )}
          >
            CV — v1 variants
          </p>
          <p className="mt-6 max-w-prose text-[15px]/relaxed text-pretty text-foreground/85">
            One CV, several cuts. Max is the full story, Mini is the two-page
            compact version, and the role minis each fit a single page.
          </p>
        </header>

        <main className="mt-12">
          <ul className="divide-y divide-border border-t border-b border-border">
            {VARIANTS.map((variant) => (
              <li key={variant.slug}>
                <Link
                  href={`/v1/${variant.slug}`}
                  className="group grid gap-x-8 gap-y-1 py-5 transition-colors sm:grid-cols-[11rem_1fr] sm:items-baseline"
                >
                  <span className="min-w-0">
                    <span
                      className={cn(
                        SERIF,
                        "text-lg/6 font-medium underline decoration-foreground/0 underline-offset-[3px] transition-colors group-hover:decoration-foreground/40"
                      )}
                    >
                      {variant.name}
                    </span>
                    <span className="mt-0.5 block font-mono text-[11px] text-muted-foreground">
                      /v1/{variant.slug}
                    </span>
                  </span>
                  <span className="min-w-0 text-sm/relaxed text-foreground/80">
                    <span className="font-medium text-foreground">
                      {variant.title}.
                    </span>{" "}
                    {variant.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}
