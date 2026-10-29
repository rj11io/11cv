# CV variants

This folder contains the versioned CV routes under `/v1`: one full CV and one
generalist compact CV.

## Routes

| Route | Variant |
| --- | --- |
| `/v1` | Variant index |
| `/v1/max` | Full CV; reads the main files in [`content/`](../../content/) |
| `/v1/mini` | Two-page generalist CV |

Run the site from the repository root:

```bash
npm --prefix v1/www run dev
```

Then open `http://localhost:3000/v1`. Every CV variant page includes a
**Download PDF** button that opens the browser print dialog.

## How variants are defined

[`variants.ts`](variants.ts) is the registry used by the index page and sitemap.
Mini has a [`content.ts`](mini/content.ts) module with its tailored copy and
print-page budget. Its renderer lives in [`_mini/mini-cv.tsx`](_mini/mini-cv.tsx);
it also loads the profile and education from [`content/`](../../content/).
