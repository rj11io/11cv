# CV content

These Markdown files are the single source of truth for the full CV. The
`/v1/max` route and the shared mini-variant renderer load identity and education
from this folder; the homepage redirects to `/v1/mini`.

## Format

Each file follows the same small set of rules, parsed by `lib/cv`:

- **Frontmatter** (`---` block at the top): `key: value` lines. Used in
  `profile.md` for the name, title, location, and contact details.
- **`## Heading`** starts an entry (a job, a degree, a project, a skill
  group). `# Single-hash` titles are decoration and get ignored.
- **`key: value` lines directly under a `##` heading** are that entry's
  metadata (company, period, location, url, school, ...). The first blank
  or normal line ends the metadata.
- **Plain lines** become paragraphs; blank lines separate them.
- **`- ` lines** become highlight bullets. A long bullet may wrap onto
  the next line if the continuation line is indented.
- **Inline formatting**: `**bold**`, `*italic*`, `` `code` ``, and
  `[links](https://...)`. Nothing else (no nesting, no images, no tables).

## Files

| File            | What it holds                                                           |
| --------------- | ----------------------------------------------------------------------- |
| `profile.md`    | Name, title, contact links (frontmatter) + summary paragraphs           |
| `experience.md` | One `##` entry per role                                                 |
| `education.md`  | One `##` entry per degree                                               |
| `projects.md`   | One `##` entry per project                                              |
| `skills.md`     | One `##` group per category; items as a comma-separated line or bullets |

Deleting a file, or all entries in it, removes that section from the CV.
