# pippaford.co.uk

Marketing site for **Pippa Ford — Creative Arts Psychotherapy**, migrated off Squarespace.

SvelteKit 2 · Svelte 5 (runes) · Tailwind v4 · deployed to Vercel via `adapter-vercel`.
Every route is prerendered to static HTML, so Vercel serves plain files from the edge.

## Commands

```sh
npm run dev       # dev server
npm run build     # production build (prerenders to .svelte-kit/output/prerendered)
npm run preview   # preview the production build
npm run check     # svelte-check / typecheck
npm run format    # prettier
```

## Where things live

| Path                       | What it is                                                     |
| -------------------------- | -------------------------------------------------------------- |
| `src/lib/content.ts`       | **All site copy.** Single source of truth — edit text here.     |
| `src/lib/components/`      | `Header`, `Footer`, `Section`, `Faq`                            |
| `src/routes/+page.svelte`  | The home page, composed from the content module                 |
| `src/routes/+layout.svelte`| `<head>`, meta/OG tags, JSON-LD structured data                 |
| `src/routes/layout.css`    | Font faces + design tokens (`@theme`)                           |
| `src/routes/sitemap.xml/`  | Generated sitemap — **add new routes to the `routes` array**    |
| `static/images/`           | Images pulled from the old site, full resolution WebP           |
| `static/fonts/`            | Self-hosted Instrument Serif (SIL OFL)                          |

### Design tokens

Carried across from the old Squarespace theme so the palette matches:

| Token          | Value                | Use                    |
| -------------- | -------------------- | ---------------------- |
| `ink`          | `hsl(230 43% 16%)`   | Deep navy text         |
| `ink-soft`     | `hsl(230 22% 38%)`   | Body copy              |
| `blush`        | `hsl(294 55% 84%)`   | Accent (pink/lilac)    |
| `mist`         | `hsl(230 86% 95%)`   | Pale blue section fill |
| `shell`        | `hsl(40 30% 97%)`    | Page background        |

Typeface: **Instrument Serif** for headings, system sans stack for body — same pairing
as the Squarespace build.

## SEO notes

Already in place: canonical URL, description, Open Graph + Twitter cards, `robots.txt`,
generated `sitemap.xml`, and JSON-LD (`ProfessionalService` + `Person` + `FAQPage`).

**Still to do — needs Pippa's input, not code:**

1. **Write more copy.** The whole site is currently ~500 words. That is the single
   biggest thing holding back search rankings.
2. **State a location.** The site never says where Pippa practises. Nearly all searches
   for a therapist are local ("EMDR therapist in _____"). Adding a town/region — and a
   `LocalBusiness` address in the JSON-LD — is the highest-value change available.
3. **Then split into pages.** Once there is enough copy, promote each service to its own
   route (`/emdr`, `/ecotherapy`, `/individual-therapy`, `/about`, `/contact`). The
   content module is structured to make this a small change. Splitting *before* there is
   copy to fill the pages would make things worse, not better.

## Migration notes

- The old site's nav linked to `#testimonials` and `#contact-us`, but no elements with
  those ids existed — both links did nothing. Fixed here; all five nav anchors resolve.
- Old page `<title>` was `Pippaford76@gmail.com` and the meta description was empty.
  Both now set properly.
- Redirects: the old site also served `/home`. Add a redirect to `/` in Vercel if that
  URL has any inbound links.
