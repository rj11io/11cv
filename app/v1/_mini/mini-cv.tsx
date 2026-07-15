// Compact CV renderer shared by every mini variant. Same design language as
// max, but tuned to a fixed print budget (role.pdfPages): two-page minis get
// comfortable print spacing, one-page minis a denser print layout (smaller
// type, tighter gaps, slimmer header). Screen layout is identical either way.

import type { Metadata } from "next"
import { Fragment } from "react"

import { PrintButton } from "@/components/print-button"
import { loadCV } from "@/lib/cv"
import { contactList } from "@/lib/cv/contacts"
import type { Contact } from "@/lib/cv/contacts"
import { Inline } from "@/lib/cv/markdown"
import { bareUrl, cn } from "@/lib/utils"

import styles from "./mini.module.css"
import type { MiniEntry, MiniProject, MiniRole, MiniSkillGroup } from "./types"

const SERIF = "font-[family-name:var(--font-serif-cv)]"
const LINK =
  "underline decoration-foreground/25 underline-offset-[3px] transition-colors hover:decoration-foreground print:decoration-foreground/40"

/** Print-only body text size: 13px on screen stays, print shrinks if dense. */
const body = (dense: boolean) =>
  dense ? "print:text-[11px]/[1.5]" : undefined

/** Page metadata for a mini variant: title, description, canonical. */
export function miniMetadata(role: MiniRole): Metadata {
  const title = `Ricardo Jorge: ${role.title} CV`
  return {
    title,
    description: role.description,
    alternates: { canonical: `/v1/${role.slug}` },
    openGraph: { title, description: role.description, url: `/v1/${role.slug}` },
    twitter: { title, description: role.description },
  }
}

function Dot() {
  return (
    <span aria-hidden className="text-muted-foreground/50 select-none">
      {" · "}
    </span>
  )
}

function ContactLink({ contact }: { contact: Contact }) {
  if (!contact.href) return <span>{contact.label}</span>
  const external = contact.href.startsWith("http")
  return (
    <a
      href={contact.href}
      className={LINK}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {contact.label}
    </a>
  )
}

function Section({
  label,
  dense,
  children,
}: {
  label: string
  dense: boolean
  children: React.ReactNode
}) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 gap-y-3.5 border-t border-border pt-5 md:grid-cols-[7.5rem_1fr] md:gap-x-10",
        dense
          ? "print:grid-cols-[6rem_1fr] print:gap-x-5 print:pt-2.5"
          : "print:grid-cols-[6.5rem_1fr] print:gap-x-6 print:pt-3.5"
      )}
    >
      <h2 className="text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase md:mt-0.5 print:break-after-avoid">
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

function EntryItem({ entry, dense }: { entry: MiniEntry; dense: boolean }) {
  return (
    <article className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-0.5">
        <h3
          className={cn(
            SERIF,
            "text-base/6 font-medium text-balance",
            dense && "print:text-[13px]/[1.35]"
          )}
        >
          {entry.role}
          <span className="font-normal text-muted-foreground italic">
            {" · "}
            {entry.url ? (
              <a
                href={entry.url}
                className={LINK}
                target="_blank"
                rel="noreferrer"
              >
                {entry.company}
              </a>
            ) : (
              entry.company
            )}
          </span>
        </h3>
        <p
          className={cn(
            "font-mono text-[11px] whitespace-nowrap text-muted-foreground",
            dense && "print:text-[9px]"
          )}
        >
          {entry.period}
        </p>
      </div>
      <ul className={cn("mt-1.5 space-y-1", dense && "print:mt-1 print:space-y-0.5")}>
        {entry.highlights.map((item, i) => (
          <li
            key={i}
            className={cn(
              "flex gap-2.5 text-[13px]/relaxed text-foreground/80",
              body(dense)
            )}
          >
            <span aria-hidden className="text-muted-foreground/60 select-none">
              –
            </span>
            <span className="max-w-prose min-w-0 text-pretty">
              <Inline text={item} linkClassName={LINK} />
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function SkillGroups({
  groups,
  dense,
}: {
  groups: MiniSkillGroup[]
  dense: boolean
}) {
  return (
    <div className={cn("space-y-2", dense ? "print:space-y-1" : "print:space-y-1.5")}>
      {groups.map((group) => (
        <div
          key={group.name}
          className={cn(
            "grid break-inside-avoid gap-x-5 gap-y-0.5 sm:grid-cols-[9.5rem_1fr]",
            dense ? "print:grid-cols-[7.5rem_1fr]" : "print:grid-cols-[8.5rem_1fr]"
          )}
        >
          <h3 className={cn("text-[13px]/relaxed font-medium", body(dense))}>
            {group.name}
          </h3>
          <p
            className={cn(
              "min-w-0 text-[13px]/relaxed text-foreground/80",
              body(dense)
            )}
          >
            {group.items.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && <Dot />}
                {item}
              </Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}

function ProjectList({
  projects,
  dense,
}: {
  projects: MiniProject[]
  dense: boolean
}) {
  return (
    <ul className={cn("space-y-1.5", dense ? "print:space-y-0.5" : "print:space-y-1")}>
      {projects.map((project) => (
        <li
          key={project.name}
          className={cn(
            "break-inside-avoid text-[13px]/relaxed text-foreground/80",
            body(dense)
          )}
        >
          <span
            className={cn(
              SERIF,
              "text-sm font-medium text-foreground",
              dense && "print:text-[11.5px]"
            )}
          >
            {project.name}
          </span>
          <span
            className={cn(
              "ml-2 font-mono text-[11px] text-muted-foreground",
              dense && "print:text-[9px]"
            )}
          >
            <a
              href={project.url}
              className={LINK}
              target="_blank"
              rel="noreferrer"
            >
              {bareUrl(project.url)}
            </a>
          </span>
          <Dot />
          {project.blurb}
        </li>
      ))}
    </ul>
  )
}

export function MiniCV({ role }: { role: MiniRole }) {
  const { profile, education } = loadCV()
  const contacts = contactList(profile.meta)
  const dense = role.pdfPages === 1

  return (
    <div className={cn(styles.page, "bg-background text-foreground")}>
      {/* Print fixes that must reach outside this tree: hide the Next.js
          dev-tools overlay, and keep the document canvas white so no dark
          edge peeks around the page in dark mode. */}
      <style>
        {
          "@media print { nextjs-portal { display: none } html, body { background: #fff !important } }"
        }
      </style>
      <div className="mx-auto max-w-[46rem] px-6 py-14 sm:px-8 sm:py-20 print:max-w-none print:p-0">
        <header className="relative">
          {profile.name && (
            <h1
              className={cn(
                SERIF,
                "text-3xl/[1.1] font-medium tracking-tight text-balance sm:text-4xl/[1.1]",
                dense && "print:text-[26px]/[1.05]"
              )}
            >
              {profile.name}
            </h1>
          )}
          <p
            className={cn(
              SERIF,
              "mt-2 text-base/snug text-pretty text-muted-foreground italic sm:text-lg/snug",
              dense && "print:mt-1 print:text-[13px]/snug"
            )}
          >
            {role.title}
          </p>
          {contacts.length > 0 && (
            <p
              className={cn(
                "mt-4 font-mono text-xs/loose text-muted-foreground",
                dense
                  ? "print:mt-2 print:text-[9px]/relaxed"
                  : "print:mt-3 print:text-[10px]/relaxed"
              )}
            >
              {contacts.map((contact, i) => (
                <Fragment key={i}>
                  {i > 0 && <Dot />}
                  <span className="whitespace-nowrap">
                    <ContactLink contact={contact} />
                  </span>
                </Fragment>
              ))}
            </p>
          )}
          <div className="mt-6 w-fit text-center sm:absolute sm:top-1 sm:right-0 sm:mt-0 print:hidden">
            <PrintButton />
            <p className="mt-2 font-mono text-[10px]/none text-muted-foreground/50">
              Press &quot;D&quot; for dark mode
            </p>
          </div>
        </header>

        <main
          className={cn(
            "mt-8 space-y-7",
            dense ? "print:mt-4 print:space-y-2.5" : "print:mt-5 print:space-y-4"
          )}
        >
          {role.summary.length > 0 && (
            <Section label="About me" dense={dense}>
              <div className="max-w-prose space-y-2.5 print:space-y-2">
                {role.summary.map((text, i) => (
                  <p
                    key={i}
                    className={cn(
                      "text-[13.5px]/relaxed text-pretty text-foreground/85",
                      body(dense)
                    )}
                  >
                    <Inline text={text} linkClassName={LINK} />
                  </p>
                ))}
              </div>
            </Section>
          )}

          {role.skills.length > 0 && (
            <Section label="Skills" dense={dense}>
              <SkillGroups groups={role.skills} dense={dense} />
            </Section>
          )}

          {role.experience.length > 0 && (
            <Section label="Experience" dense={dense}>
              <div
                className={cn(
                  "space-y-5",
                  dense ? "print:space-y-2" : "print:space-y-3.5"
                )}
              >
                {role.experience.map((entry, i) => (
                  <EntryItem key={i} entry={entry} dense={dense} />
                ))}
                {role.earlierRoles && (
                  <p
                    className={cn(
                      "max-w-prose text-[13px]/relaxed text-pretty text-muted-foreground",
                      body(dense)
                    )}
                  >
                    <Inline text={role.earlierRoles} linkClassName={LINK} />
                  </p>
                )}
              </div>
            </Section>
          )}

          {role.projects && role.projects.length > 0 && (
            <Section label="Projects" dense={dense}>
              <ProjectList projects={role.projects} dense={dense} />
            </Section>
          )}

          {education.length > 0 && (
            <Section label="Education" dense={dense}>
              <div className="space-y-2">
                {education.map((entry, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-0.5 break-inside-avoid"
                  >
                    <p
                      className={cn(
                        "text-[13px]/relaxed text-foreground/80",
                        body(dense)
                      )}
                    >
                      <span
                        className={cn(
                          SERIF,
                          "text-sm font-medium text-foreground",
                          dense && "print:text-[11.5px]"
                        )}
                      >
                        {entry.heading}
                      </span>
                      {entry.meta.school && (
                        <>
                          <Dot />
                          {entry.meta.school}
                        </>
                      )}
                    </p>
                    {entry.meta.period && (
                      <p
                        className={cn(
                          "font-mono text-[11px] whitespace-nowrap text-muted-foreground",
                          dense && "print:text-[9px]"
                        )}
                      >
                        {entry.meta.period}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          )}
        </main>
      </div>
    </div>
  )
}
