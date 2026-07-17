# CV variants

This folder contains the versioned CV routes under `/v1`: one full CV, one
generalist compact CV, and four role-focused one-page CVs.

## Routes

| Route | Variant |
| --- | --- |
| `/v1` | Variant index |
| `/v1/max` | Full CV; reads the main files in [`content/`](../../content/) |
| `/v1/mini` | Two-page generalist CV |
| `/v1/product-eng-mini` | Product Engineer focus |
| `/v1/fe-platform-eng-mini` | Frontend Platform Engineer focus |
| `/v1/datavis-eng-mini` | Data Visualisation Engineer focus |
| `/v1/founding-product-eng-mini` | Founding Product Engineer focus |

Run the site from the repository root:

```bash
npm run dev
```

Then open `http://localhost:3000/v1`. Every CV page includes a **Download PDF**
button that opens the browser print dialog.

## How variants are defined

[`variants.ts`](variants.ts) is the registry used by the index page and sitemap.
Each role-focused folder has a `content.ts` module with its tailored copy and
print-page budget. The shared renderer lives in
[`_mini/mini-cv.tsx`](_mini/mini-cv.tsx); mini variants also load the profile and
education from [`content/`](../../content/) so those details stay shared.
