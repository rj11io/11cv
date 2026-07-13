"use client"

import { Download } from "lucide-react"

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-normal whitespace-nowrap text-muted-foreground transition-all outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px"
    >
      <Download className="size-3.5" aria-hidden />
      Download PDF
    </button>
  )
}
