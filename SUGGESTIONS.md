# Next steps

Ordered by return on effort. Items 1–3 are worth more than everything below them
combined — they are about what the site _says_, not how it is built.

---

## 1. Write more copy — the single biggest constraint

The site is roughly **500 words in total**. That is the main thing holding back search
rankings, and no amount of engineering substitutes for it.

For context, therapist sites that rank well for competitive local terms typically carry
1,500–3,000 words across several pages. Pippa has the expertise to fill that; it needs
writing time, not development time.

**Target: ~400–600 words per service.** Useful prompts for each:

- What does a first session actually look like, minute to minute?
- Who is this approach suited to — and who is it _not_ suited to?
- What does the evidence base say?
- What might someone notice changing after a few months?
- What does it cost, and how long is a session?

**Missing entirely, and all commonly searched:**

- **Fees and session length.** Currently absent. This is one of the most common things
  people look for, and its absence causes drop-off — people assume the worst.
- **Availability** — waiting list, or taking new clients?
- **What to expect from a first contact**, to lower the barrier to emailing.
- **Cancellation policy.**
- **Supervision offer.** Mentioned in passing in the about copy but not sold anywhere.
  It is a distinct service with its own audience (other therapists) and deserves its own
  section or page.

---

## 2. Local SEO — Bristol is now in the site, but the work isn't done

Bristol is now in the title, meta description, contact section, footer and structured
data (`PostalAddress` + `areaServed`). That was the highest-value single change. To
actually rank locally:

- **Google Business Profile.** Free, and the largest remaining lever for local search.
  It feeds the map pack, which sits above organic results. A therapist can register
  as a service-area business without publishing a home address.
- **Name the specific areas served.** "Bristol and surrounding areas" is vague. Naming
  real places — Clifton, Bedminster, Southville, Bishopston, Long Ashton, Portishead,
  Nailsea, Chew Valley — matches how people actually search. Only list places Pippa
  genuinely covers.
- **Name the outdoor locations** used for walk-and-talk sessions (Ashton Court, Leigh
  Woods, Blaise Castle, the Downs, if accurate). This is distinctive, locally specific,
  and almost nobody else will have that copy.
- **Directory listings.** Counselling Directory, Psychology Today, BACP/HCPC listings,
  BAAT/BADth. These carry real weight for therapists and are how many clients search in
  the first place.

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

Remaining:

- **Redirect `/home` → `/`.** The old Squarespace site served both URLs.
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

- **A page per Bristol suburb** ("EMDR therapist in Clifton", "…in Bedminster", …).
  This is a common SEO tactic and it is a doorway-page pattern Google penalises. It also
  reads as spammy to exactly the sort of careful client Pippa wants.
- **Heavier animation.** The current reveal is deliberately restrained. Clients arriving
  on a therapy site may be anxious or motion-sensitive; the site should feel calm.
- **A chatbot.** Wrong register entirely for this practice.
