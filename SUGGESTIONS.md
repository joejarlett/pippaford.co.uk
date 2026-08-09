# Next steps

Ordered by return on effort. Items 1–3 are worth more than everything below them
combined — they are about what the site _says_, not how it is built.

---

## 1. Write more copy — the single biggest constraint

The site is roughly **500 words in total**. That is the main thing holding back search
rankings, and no amount of engineering substitutes for it.

For context, therapist sites that rank well typically carry 1,500–3,000 words across
several pages. Pippa has the expertise to fill that; it needs writing time, not
development time.

**Target: ~400–600 words per service.** Useful prompts for each:

- What does a first session actually look like, minute to minute?
- Who is this approach suited to — and who is it _not_ suited to?
- What does the evidence base say?
- What might someone notice changing after a few months?

**Missing entirely, and all commonly searched:**

- **Fees and session length** are deliberately not published — decided August 2026, see
  VOICE.md. Worth restating the cost of that choice: it is among the most-searched
  information on any therapist site, and its absence does lose enquiries. The mitigation
  is to make asking easy, which puts the weight on `/contact` making clear that questions
  about cost are welcome and expected.
- **Availability** — waiting list, or taking new clients?
- **What to expect from a first contact**, to lower the barrier to emailing.
- **Cancellation policy.**
- **Supervision offer.** Mentioned in passing in the about copy but not sold anywhere.
  It is a distinct service with its own audience (other therapists) and deserves its own
  section or page.

---

## 2. Search positioning — remote-first, not local

The practice runs online and by telephone, so it serves the whole UK. The site is written
that way: no locality, `areaServed` set to United Kingdom in the structured data, and no
`PostalAddress`.

This is a harder SEO position than a local one, and worth being clear-eyed about. "Therapist
in ⟨town⟩" has modest competition; "online therapist UK" is contested nationally by large
directories and venture-funded platforms. Ranking on generic national terms is not a
realistic target. What _is_ realistic:

- **Compete on specificity, not volume.** Pippa's differentiators are genuinely unusual —
  dramatherapy, Eco-Depth practice, creative clinical supervision, EMDR delivered online.
  "Online dramatherapy UK" or "creative arts psychotherapy online" have far less competition
  than "online therapy" and attract people who want precisely this. Target those.
- **Directory listings are likely to out-perform the site itself**, and that is fine.
  Counselling Directory, Psychology Today, BACP/HCPC registers, BADth. Most clients search
  these directly rather than via Google, and the profiles rank well on their own. Ensure
  each links back to the site.
- **Say "online and telephone" prominently and early.** Someone searching from anywhere in
  the UK needs to know within seconds that distance is not a barrier. This is currently only
  in the contact section and footer — the hero says nothing about it.
- **Skip Google Business Profile.** It is built around local map-pack results, which is not
  where a UK-wide remote practice competes.

### One thing to check with Pippa

The FAQ answer to "How are sessions facilitated?" mentions **video** and **walk & talk**, but
not **telephone** — yet phone is one of the two main ways she works. That answer is Pippa's
own copy so it has not been rewritten here, but it should be updated, and it is the clearest
example of the site under-selling what is actually offered.

Related: if walk & talk sessions still run in person, they happen _somewhere_, and the site
now gives no geographic signal at all. Worth deciding whether that offer is still active. If
it is, it needs a location to be findable; if it is not, the FAQ should drop it.

---

## 3. Make it easy to get in touch

Right now the only route is an email address. That is a high-friction ask for someone
who is anxious and reaching out about therapy for the first time.

- **Add a contact form.** A short one — name, email, brief message, preferred contact
  method. It converts substantially better than a `mailto:` link, because the person
  doesn't have to compose a cold email from scratch.
  - On Vercel this needs a form handler; a SvelteKit form action plus a transactional
    email service (Resend, Postmark) is the straightforward path.
  - **This collects health-adjacent personal data — see the privacy note below.**
- **Consider a professional email address.** `pippa@pippaford.co.uk` reads as more
  established than a Gmail address, and it is included with most domain plans.
- **Set expectations.** "I aim to reply within two working days" reduces anxiety and
  reduces chasing emails.

---

## 4. Legal and compliance — needed before a form goes live

Not optional once the site collects any personal data.

- **Privacy policy.** UK GDPR requires one. Enquiries from prospective therapy clients
  are sensitive by nature, so it must cover what is collected, the lawful basis,
  retention period, and how to request deletion.
- **Cookie notice.** Only needed if analytics is added. A privacy-first analytics tool
  (Plausible, Fathom) avoids the cookie banner entirely — worth choosing on those grounds
  alone.
- **Professional disclosures.** HCPC number is present, which is good. Worth adding
  insurance details and complaints procedure.
- **A crisis signpost.** Standard practice on therapy sites: a short line noting the site
  is not for emergencies, pointing to Samaritans (116 123), NHS 111, or A&E. This matters
  more than anything else on this list, for reasons that have nothing to do with search.

---

## 5. Content that earns links and trust

- **A short blog or writing section.** Two or three thoughtful pieces a year on topics
  Pippa is asked about repeatedly does more for search than a dozen thin pages.
  Ecotherapy and Eco-Depth practice are genuinely differentiated — few UK therapists
  offer them, so there is little competition for those terms.
- **More testimonials**, if ethically obtainable. Check the HCPC and professional body
  position on soliciting client testimonials before adding any — the two currently on the
  site are anonymised, which is the right pattern.
- **A photo of an actual session setting** (room, or a walk-and-talk location). The
  current service images are stock; real ones build far more trust.

---

## 6. Technical — mostly done, small items remaining

Already in place: prerendered static HTML, responsive images, self-hosted fonts,
canonical, Open Graph, sitemap, `robots.txt`, JSON-LD, WCAG AA contrast, reduced-motion
support.

Also done since: a `/home` → `/` redirect, a custom 404 page, security and cache headers,
and a favicon built from the site's own typeface.

Remaining:

- **Verify in Google Search Console** after the DNS cutover, and submit the sitemap.
- **Test the structured data** with Google's Rich Results Test — the `FAQPage` schema can
  earn expandable results directly in the search listing.
- **Add analytics** — Plausible or Fathom, for the no-cookie-banner reason above.
- **Split into pages — but only after step 1.** Once each service has real copy, promote
  them to `/emdr`, `/ecotherapy`, `/individual-therapy`, `/supervision`, `/about`,
  `/contact`. `src/lib/content.ts` is structured to make this a small change. Splitting
  the current 500 words across six pages would produce six thin pages and rank _worse_
  than one solid page — this is why it is last, not first.

---

## Deliberately not recommended

- **A page per town** ("EMDR therapist in ⟨town⟩", repeated across the country).
  This is a common SEO tactic and it is the doorway-page pattern Google penalises. It also
  reads as spammy to exactly the sort of careful client Pippa wants — and it would be
  misleading for a practice that works remotely rather than in those places.
- **Chasing generic national terms.** "Online therapy UK" is contested by directories and
  funded platforms with budgets this site will not match. Specificity beats volume here.
- **Heavier animation.** The current reveal is deliberately restrained. Clients arriving
  on a therapy site may be anxious or motion-sensitive; the site should feel calm.
- **A chatbot.** Wrong register entirely for this practice.
