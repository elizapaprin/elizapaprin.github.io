# Eliza Paprin — Portfolio Website Plan

A producer-focused portfolio site for `eliza476.github.io`. Eliza is actively job-hunting in **video production / producing**, so the site should read like a producer's reel + experience hub — not an actor's headshot page.

**Tagline direction:** Independent film producer based in Los Angeles. Festival-selected work, post-production fluency, and a producing slate spanning shorts, theater, and documentary.

---

## Working agreements

- [ ] **Never edit `README.md`** — Eliza is adding her experience there. Before every working session, run `git pull origin main` to grab her latest edits.
- [ ] Treat `README.md` as the **source-of-truth links list**. When she adds a new line, port the credit into the site (but leave the README alone).
- [ ] Commit in small, reviewable chunks (e.g. "scaffold index.html", "add Work section", "add headshot + hero").
- [ ] Push to `main` — GitHub Pages on a `username.github.io` repo serves `main` automatically. No `gh-pages` branch needed.

---

## Phase 0 — Research already completed

Pulled from her resume, README links, and web searches. Use this as the writing source for the site.

### Confirmed producing/film credits
- [ ] **Idyll** (2025, short, sci-fi) — **Producer**. Dir. Austin Cauldwell. Stars Mina Sundwall (*Lost in Space*) and Renee Herbert. Premise: a VR platform lets a quiet young woman become who she wishes she were, until the line between identity and avatar collapses. **Festivals: Beverly Hills Film Festival, Atlanta Shortsfest, Florida Film Festival 2026.** IMDB: `tt35652422`.
- [ ] **Where We Played** (documentary short) — **Producer**. Dir. Nat Wolff & Austin Cauldwell. **Dances with Films** documentary selection. IMDB: `tt39578508`.
- [ ] **This Means Goodnight** (2024, short) — **Associate Producer**. Dir. Peter Charney. Cast: Rachel Kinzler, Anna Rudegeair. **Dances with Films** East Coast Premiere. Synopsis: two neighbors share a wall and find solace in each other through the loneliness of city life.
- [ ] **Lola** (2022, short) — **Director / Writer / Producer**. Campus Movie Fest finalist, Golden Tripod finalist, **Silver Tripod winner — Best Actress**.
- [ ] **Dry Land** (Atwater Village Theatre, 2024) — **Assistant Director & Producer**. Play by Ruby Rae Spiegel. Dir. Austin Cauldwell. Reviewed on StageSceneLA.
- [ ] **Not Like Other Girls** (YouTube series) — **Creator / Writer / Producer**.
- [ ] **2025 Chain NYC Film Festival** — selection (confirm which film when Eliza clarifies).
- [ ] **27-33** (Eko interactive) — **Actor** (secondary credit — keep but de-emphasize since the site is producer-focused).
- [ ] **Marty Supreme x NBA on ESPN promo** — **Production Assistant** (de-emphasize).
- [ ] **Take Your Time** (2018), **Midtown Moments** — listed on IMDB; ask Eliza for role + whether to include.

### Work experience (from resume — restate in producer-voice on the site)
- [ ] **Bonch Post** — Post PA, Aug 2025 – Present (Los Angeles). Media ingest, project setup, editor/AE workflow support, QC, deliveries, departmental handoffs across editorial / color / sound / finishing.
- [ ] **Independent Film Producer** — Dec 2023 – Present. Producing slate above; full-cycle producing from development through post.
- [ ] **Zenosyne Media** — Development & Acquisitions Assistant, May 2024 – July 2025. Female-led production company (founded by Mina Sundwall). Exec support, submissions tracking, slate management.
- [ ] **Post-Production Assistant** — *not on resume but on LinkedIn per Eliza* → confirm the company/dates from LinkedIn before publishing.

### Education & honors
- [ ] **Emory University** — BA, Film Studies, August 2020.
- [ ] Honors from resume: **Henry L. Bowdoin Scholarship** (merit), **Friends of Theater Emory Grant**, **Kappa Alpha Theta Foundation Grant**.
- [ ] **Dean's List at Emory** — Eliza mentioned this; pull exact semesters from LinkedIn.

### Skills (from resume)
Final Draft, script coverage, Adobe Premiere, DaVinci Resolve, Avid, Adobe InDesign, Frame.io, Airtable, Box, Dropbox, Google + Microsoft Suite, pitch-deck curation, scheduling, travel coordination, camera op, content creation.

---

## Phase 1 — Assets

- [ ] Use the existing **headshot** at the repo root (`Eliza Paprin-1487.jpg`) — move into `assets/img/` and rename to `headshot.jpg`.
- [ ] Download additional photos from her IMDB gallery (`https://www.imdb.com/name/nm11518692/mediaindex`). **WAF-blocked from automated download** — Eliza or Matt to grab them manually via browser (right-click → save image) and drop into `assets/img/`. Aim for 2–4 on-set / behind-the-scenes photos.
- [ ] Source poster / still images for each headline credit:
  - [ ] *Idyll* — poster or key still (check the Beverly Hills FF film page / Seed&Spark campaign).
  - [ ] *Where We Played* — poster / festival still.
  - [ ] *This Means Goodnight* — Dances with Films listing has a still.
  - [ ] *Lola* — Campus Movie Fest page should have a thumbnail.
  - [ ] *Dry Land* — production photo from StageSceneLA review.
- [ ] Add the resume PDF (`Eliza Paprin Resume '26.pdf`) to `assets/` so the site can link to it for download.
- [ ] Create a `favicon.ico` (simple "EP" monogram is fine).
- [ ] Optimize all images: max-width ~1600px, compressed JPG/WebP, target < 200KB each.

---

## Phase 2 — Site architecture

Single-page site (scrollable) with anchor nav. Static HTML/CSS/JS — no build step, GitHub Pages serves it as-is.

```
eliza476.github.io/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── img/
│   │   ├── headshot.jpg
│   │   ├── idyll-still.jpg
│   │   ├── where-we-played-still.jpg
│   │   └── ...
│   └── Eliza-Paprin-Resume.pdf
├── README.md   ← DO NOT EDIT
├── PLAN.md     ← this file
└── Eliza Paprin Resume '26.pdf   ← leave as-is, copy into assets/
```

- [ ] Scaffold `index.html` with semantic sections: `<header>`, `#about`, `#work`, `#experience`, `#education`, `#contact`.
- [ ] Scaffold `assets/css/styles.css` (mobile-first, dark cinematic palette or warm editorial — see Phase 3).
- [ ] Scaffold `assets/js/main.js` for smooth scroll + nav highlighting only — no framework.

---

## Phase 3 — Design direction

Producer portfolios in film tend to be either **editorial-clean** (white, serif headlines, lots of breathing room — think A24 or production company "about" pages) or **cinematic-dark** (black/charcoal backgrounds, large stills, minimal chrome).

- [ ] **Recommend: editorial-clean.** It reads more like a producer/executive site than an actor reel and lets the festival laurels and stills do the heavy lifting. Confirm with Eliza before locking the palette.
- [ ] Typography pairing: a serif display face (e.g. *Fraunces*, *Editorial New*, *Cormorant*) + a clean sans for body (*Inter*, *Söhne*, system stack). Load via Google Fonts or local woff2.
- [ ] Palette: off-white background `#F7F5F0`, ink `#111`, muted accent (e.g. terracotta `#B5532A` or deep green `#2E4636`). One accent only.
- [ ] Generous vertical rhythm, ~70ch max body width, full-bleed photo bands between sections.
- [ ] Hover states: subtle underline-grow on links, image zoom on work cards.

---

## Phase 4 — Section-by-section build

### Header / Hero
- [ ] Name lockup: **Eliza Paprin**.
- [ ] Role tag: "Producer • Los Angeles".
- [ ] One-line pitch (draft: "Independent producer building character-driven shorts, documentary, and theater — currently at Bonch Post.").
- [ ] CTA buttons: "View work" (scrolls to #work), "Download resume" (links to PDF), "Email" (`mailto:elipaprin@gmail.com`).
- [ ] Anchor nav: Work · Experience · About · Contact.

### About / Bio
- [ ] 2–3 short paragraphs in first-person-adjacent voice. Cover: LA-based, Emory Film Studies grad, producing slate across festival shorts + theater, currently at Bonch Post bridging into post-production fluency, looking for **producer / video production roles**.
- [ ] Headshot beside the bio.

### Work / Selected Credits (the centerpiece)
- [ ] Grid of credit cards, each with: poster/still, title, year, **role**, director, festivals/awards, one-line synopsis, links (festival page, watch link if public, IMDB).
- [ ] Order: feature the produced work first (*Idyll*, *Where We Played*, *This Means Goodnight*, *Dry Land*, *Lola*), then *Not Like Other Girls*, then "Additional Credits" collapsible block for the PA / actor / acquisitions credits.
- [ ] Festival laurels: render the BHFF / Atlanta Shortsfest / Florida Film Fest / Dances with Films / Chain NYC selections as small badge graphics under each card.

### Experience
- [ ] Timeline / vertical list of roles in reverse-chronological: Bonch Post → Independent Producer → Zenosyne → (Post-Production Assistant pending LinkedIn) → earlier.
- [ ] Lead each with company, role, dates, location; 2–3 outcome-oriented bullets (trim resume bullets for web — no copy-paste walls).

### Education & Honors
- [ ] Emory University, BA Film Studies, 2020.
- [ ] Dean's List (pull semesters from LinkedIn).
- [ ] Henry L. Bowdoin Scholarship, Friends of Theater Emory Grant, Kappa Alpha Theta Foundation Grant.

### Skills
- [ ] Two columns: **Production** (Final Draft, scheduling, call sheets, budgets, contracts, locations, talent coordination) and **Post / Tech** (Premiere, DaVinci, Avid, Frame.io, Airtable, Box, Dropbox, InDesign).

### Contact / Footer
- [ ] Email: `elipaprin@gmail.com`.
- [ ] Phone: `404-831-8110` (confirm she wants it public — many producers do, but ask).
- [ ] LinkedIn: `https://www.linkedin.com/in/elizapaprin/`.
- [ ] IMDB: `https://www.imdb.com/name/nm11518692/`.
- [ ] Resume download link.

---

## Phase 5 — Quality + ship

- [ ] Mobile responsive at 375 / 768 / 1280 widths. Test in actual browser dev tools, not just by eye.
- [ ] Verify every external link opens correctly and `target="_blank" rel="noopener"` is set on outbound.
- [ ] Add `<meta>` SEO + Open Graph: title "Eliza Paprin — Producer", description, og:image (headshot or *Idyll* poster).
- [ ] Run Lighthouse: targets 95+ on performance, 100 on accessibility.
- [ ] Check color contrast (WCAG AA min).
- [ ] Cross-browser sanity: Safari, Chrome, Firefox.
- [ ] Commit + push to `main`. Confirm GitHub Pages picks it up at `https://eliza476.github.io`.
- [ ] Share preview with Eliza for sign-off before considering it shipped.

---

## Open questions for Eliza

- [ ] Post-Production Assistant role — which company, what dates? (Mentioned by Matt as on LinkedIn but missing from resume.)
- [ ] Phone number — public on site, or email-only?
- [ ] Include *Take Your Time* and *Midtown Moments* (older IMDB credits)? What was her role?
- [ ] Which film at the 2025 Chain NYC Film Festival?
- [ ] Confirm design direction (editorial-clean vs cinematic-dark).
- [ ] Preferred one-line bio / pitch — Matt can draft, but she'll want to wordsmith.
