# 11cv

This repository contains Ricardo Jorge's Next.js web and print CV. The
application lives in [`v1/www/`](v1/www/); the Markdown CV content is loaded
from [`v1/www/content/`](v1/www/content/).

## Repository layout

- [`v1/www/`](v1/www/) — the deployable Next.js CV application.
- [`v1/www/content/`](v1/www/content/) — the shared Markdown source for the
  full CV and common profile and education data.
- [`v1/branding/`](v1/branding/) — favicon and social-image assets.

The original version remains in [`v0/`](v0/).

## Run the site

From the repository root:

```bash
npm install --prefix v1/www
npm --prefix v1/www run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage redirects to
the current default CV variant at `/v1/mini`.

Run the available checks with:

```bash
npm --prefix v1/www run typecheck
npm --prefix v1/www run lint
npm --prefix v1/www run build
```

For the complete route list and application notes, see
[`v1/www/README.md`](v1/www/README.md). For the Markdown format, see
[`v1/www/content/README.md`](v1/www/content/README.md).
