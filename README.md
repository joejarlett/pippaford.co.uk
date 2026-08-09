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

| Path                            | What it is                                                   |
| ------------------------------- | ------------------------------------------------------------ |
| `src/lib/content.ts`            | **All site copy.** Single source of truth — edit text here.  |
| `src/lib/components/`           | `Header`, `Footer`, `Section`, `Faq`                         |
| `src/routes/+page.svelte`       | The home page, composed from the content module              |
| `src/routes/+layout.svelte`     | `<head>`, meta/OG tags, JSON-LD structured data              |
| `src/routes/layout.css`         | Font faces + design tokens (`@theme`)                        |
| `src/routes/sitemap.xml/`       | Generated sitemap — **add new routes to the `routes` array** |
| `src/lib/components/Img.svelte` | Responsive `<img>` — picks the right variant via `srcset`    |
| `static/images/`                | Pre-generated image variants, `<name>-<width>.webp`          |
| `static/fonts/`                 | Self-hosted Instrument Serif (SIL OFL)                       |

### Images

Variants are generated ahead of time rather than at request time, so there is no image
service to pay for or configure. To regenerate after adding a source image:

```sh
magick source.webp -resize "800x>" -quality 82 -define webp:method=6 static/images/name-800.webp
```

Then add the base path and available widths to `src/lib/content.ts` and render with `Img`.

Resizing the originals took the page from **7.9 MB to 628 KB** of images — the hero alone
went from 1.5 MB to 44 KB.

### Design tokens

Sampled from the live Squarespace site's computed styles, so the palette matches:

| Token        | Value     | Use                                        |
| ------------ | --------- | ------------------------------------------ |
| `ink`        | `#171d3a` | Deep navy — hero, about section, body text |
| `ink-soft`   | `#4a5372` | Secondary body copy on pale grounds        |
| `mist`       | `#e5e9fd` | Pale lavender — intro, testimonials, FAQ   |
| `periwinkle` | `#94abf9` | Services and contact sections              |
| `blush`      | `#e8c0ed` | Accent — only on dark grounds (see below)  |

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
   content module is structured to make this a small change. Splitting _before_ there is
   copy to fill the pages would make things worse, not better.

## Migration notes

Section colours, fonts and layouts were read off the live Squarespace site's computed
styles rather than eyeballed, so the palette matches exactly.

Deliberate departures from the original:

- **Contrast.** The services and contact sections used white body text on periwinkle
  (2.2:1) and a blush heading on periwinkle (1.4:1). WCAG AA wants 4.5:1 for body text.
  Both now use ink on periwinkle — 7.4:1, same palette.
- **Nav anchors.** The old nav linked to `#testimonials` and `#contact-us`, but no
  elements with those ids existed, so both links did nothing. All five resolve now.
- **Title and description.** The old `<title>` was `Pippaford76@gmail.com` and the meta
  description was empty. Both set properly.
- **Brand text.** The header showed the email address as the site name; it now shows
  "Pippa Ford".
- **FAQ answers** are always visible, as on the original — no accordion, so the text is
  there for crawlers and needs no JavaScript.
- **Alt text** was written for the three service images; the originals had none.

Still to check: the old site also served `/home`. Add a redirect to `/` in Vercel if that
URL has inbound links.
