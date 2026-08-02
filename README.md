# 11cv

This repository contains Ricardo Jorge's Next.js web and print CV. The
application lives in [`v0/www/`](v0/www/); the Markdown CV content is loaded
from [`v0/www/content/`](v0/www/content/).

## Repository layout

- [`v0/www/`](v0/www/) — the deployable Next.js CV application.
- [`v0/www/content/`](v0/www/content/) — the shared Markdown source for the
  full CV and common profile and education data.
- [`v0/branding/`](v0/branding/) — favicon and social-image assets.

## Run the site

From the repository root:

```bash
npm install --prefix v0/www
npm --prefix v0/www run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage redirects to
the current default CV variant at `/v1/mini`.

Run the available checks with:

```bash
npm --prefix v0/www run typecheck
npm --prefix v0/www run lint
npm --prefix v0/www run build
```

For the complete route list and application notes, see
[`v0/www/README.md`](v0/www/README.md). For the Markdown format, see
[`v0/www/content/README.md`](v0/www/content/README.md).
