# Image manifest

What the site needs, where each image appears, and the dimensions to supply.

**Everything currently in `static/images/` is stock** carried over from the Squarespace
site (the portrait excepted). Real photographs will do more for trust than anything else
on the page — particularly for a practice people have to feel safe enough to contact.

---

## How to add one

Supply the largest version you have — ideally JPEG or PNG straight from the camera, not
pre-resized. Then generate the variants:

```sh
# from the project root, for each width the slot needs
magick source.jpg -resize "1400x>" -quality 82 -define webp:method=6 \
  static/images/<name>-1400.webp
```

Then update the matching entry in `src/lib/content.ts` — each is an object of the form
`{ base, widths, width, height }`, where `base` is the path without the width suffix and
`width`/`height` are the intrinsic dimensions of the **largest** variant.

Filenames must follow `<base>-<width>.webp` or the `srcset` will not resolve.

---

## Slots

### 1. Hero — `hero-bg`

|                    |                                         |
| ------------------ | --------------------------------------- |
| **Appears**        | Home page, full-bleed behind the title  |
| **Widths needed**  | 800, 1400, 1792                         |
| **Aspect**         | Landscape, roughly 16:9                 |
| **Minimum source** | 1800px wide                             |
| **Currently**      | Stock illustration of a lake at sunrise |

Text sits over the lower-left, in white. Choose something with a calm, uncluttered lower
third — busy detail there will fight the title. Wide landscape, water, sky, or soft
out-of-focus foliage all work.

### 2. Portrait — `pippa-portrait`

|                    |                               |
| ------------------ | ----------------------------- |
| **Appears**        | Home page, About page sidebar |
| **Widths needed**  | 600, 1200                     |
| **Aspect**         | Portrait, 3:4                 |
| **Minimum source** | 1200px wide                   |
| **Currently**      | Existing photograph of Pippa  |

The single most valuable image on the site. Worth a considered one: neutral or natural
background, soft light, looking toward the camera. People decide whether to contact a
therapist substantially on this.

### 3. Testimonials — `testimonials-bg`

|                   |                                             |
| ----------------- | ------------------------------------------- |
| **Appears**       | Home page, beside the two quotes            |
| **Widths needed** | 600, 1200                                   |
| **Aspect**        | Landscape, 16:9 — displayed cropped to fill |
| **Currently**     | Stock image of a dark spiral                |

Abstract or natural texture. Should not compete with the quotes beside it.

### 4–6. Service images

| Slot                 | Page                           | Widths   | Aspect       |
| -------------------- | ------------------------------ | -------- | ------------ |
| `service-individual` | `/services/individual-therapy` | 400, 800 | Portrait 3:4 |
| `service-emdr`       | `/services/emdr`               | 400, 800 | Portrait 3:4 |
| `service-ecotherapy` | `/services/ecotherapy`         | 400, 800 | Portrait 3:4 |

All three are currently stock. They appear both as cards on the home and Therapy pages and
in the sidebar of each service page.

A photograph of the **actual space Pippa works in** would be worth more than all three
stock images combined. For ecotherapy, a real location rather than generic woodland.

---

## Slots with no image yet

These pages are text-only and read perfectly well that way — none of these is required. If
images are available they would be used.

| Suggested name             | Page           | Aspect        | Notes                                            |
| -------------------------- | -------------- | ------------- | ------------------------------------------------ |
| `approach-dramatherapy`    | `/approach`    | Landscape 3:2 | Materials, objects, an open notebook             |
| `approach-eco-depth`       | `/approach`    | Landscape 3:2 | Landscape, weather, water                        |
| `approach-somatic`         | `/approach`    | Landscape 3:2 | Stillness — avoid clinical or yoga-class imagery |
| `approach-trauma-informed` | `/approach`    | Landscape 3:2 | Quiet, steady, unpeopled                         |
| `supervision`              | `/supervision` | Landscape 3:2 | Two chairs, a table, a window                    |

Adding one means creating the entry in `content.ts` and rendering it with the `Img`
component — say the word and I will wire them in.

---

## Social sharing image — worth doing

|               |                                                                 |
| ------------- | --------------------------------------------------------------- |
| **Appears**   | Link previews on WhatsApp, Facebook, LinkedIn, iMessage         |
| **Size**      | Exactly 1200 × 630                                              |
| **Currently** | Falls back to the portrait, which crops awkwardly at that ratio |

A purpose-made 1200×630 — portrait to one side, name and "Creative Arts Psychotherapy"
alongside — would present far better when anyone shares the link. Save as
`static/images/og-image.png` and it can be wired into `Seo.svelte`.

---

## Two things to check

**Alt text.** Every image needs a description for screen readers and for anyone whose
images fail to load. The current alt text is mine, written to describe stock photographs —
it must be rewritten to describe whatever replaces them. Alt text lives beside each image
entry in `content.ts`.

**Permissions.** For any photograph taken in a real setting, make sure there is consent
from anyone identifiable, and that no client space is shown in a way that could identify a
client.
