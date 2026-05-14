# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A producer portfolio site for **Eliza Paprin** at `https://eliza476.github.io`. It is built and maintained collaboratively with the repo owner (`matthewfrank`, helping a friend); Eliza is **not technical** and treats the repo as a place to drop reference material rather than to write code.

The site is a static single-page HTML site served directly by GitHub Pages from the `main` branch. There is **no build step, no package manager, no framework, and no test suite** — `index.html` loads `assets/css/styles.css` and `assets/js/main.js` and that's the whole pipeline.

## Workflow rules (these matter)

- **Never edit [README.md](README.md).** Eliza actively writes to it in the GitHub web UI as a scratchpad of links and credits. Treat it as a read-only source-of-truth for which credits exist and what her role on each one was. Port content into the site, but do not write back.
- **`git pull origin main` before every working session.** Eliza pushes new files (mostly images, sometimes README edits) through the GitHub web uploader. The next session almost always starts with new untracked or modified files in the working tree.
- **Files dropped at the repo root are inputs, not outputs.** When Eliza uploads via the GitHub UI it lands at the repo root (e.g. `wwp.jpg`, `tmgg.jpg`, `dry land.jpg`, `MV5B...jpg`, `Eliza Paprin Resume '26.pdf`). The job is to identify them (use the Read tool — it displays images inline), move/rename them into `assets/img/work/` (or `assets/img/` / `assets/` for headshot / resume), and wire them into [index.html](index.html). Leave the originals at the root alone unless explicitly asked to delete — they're how she confirms her uploads arrived.
- **Do not commit or push without explicit user instruction.** This is a real person's job-search site. Stage and confirm before any commit.

## Run / preview locally

```bash
python3 -m http.server 8765 --directory /Users/matthewfrank/Documents/Personal/Eliza/eliza476.github.io
open http://localhost:8765/
```

No reload-on-save — just refresh the browser. There are no linters or tests to run.

## Architecture

### File layout
- [index.html](index.html) — single page, anchor-linked sections: hero, `#work`, `#experience`, `#about`, `#education`, `#contact`.
- [assets/css/styles.css](assets/css/styles.css) — design tokens at `:root`, then sections in source order. Editorial-clean palette: off-white `--bg` `#F7F5F0`, ink `--ink` `#141414`, terracotta `--accent` `#B5532A`. Type pairing: Fraunces (serif display) + Inter (sans body) via Google Fonts.
- [assets/js/main.js](assets/js/main.js) — three tiny features, no framework, no bundling: copyright year, scroll-spy nav highlight via `IntersectionObserver`, and the work filter + lite-YouTube activation handlers.
- [assets/img/work/](assets/img/work/) — poster art per credit. Filenames are slugs (`idyll.jpg`, `lola.jpg`, etc.). Mixed aspect ratios are fine — CSS uses `object-fit: cover` and a fixed `aspect-ratio` per card type.
- [assets/Eliza-Paprin-Resume.pdf](assets/Eliza-Paprin-Resume.pdf) — copy of the resume kept at the root. The hero "Download resume" button links here.
- [PLAN.md](PLAN.md) — the original build plan with the credit/experience inventory. Useful background; not authoritative as the site evolves.

### Work cards & filter system
Each work card is an `<li class="work-card" data-role="...">`. The three role buckets are `produced`, `hyphenate` ("Acted & Produced" in the UI), and `acted`. Filter buttons (`.filter-btn[data-filter]`) toggle a `hidden` attribute on non-matching cards. Adding a new credit: append a card to `.work-grid` with the right `data-role`, image at `assets/img/work/<slug>.jpg`, the meta line, title, credits, synopsis, optional `<ul class="laurels">` festival pills, and `.work-links`.

One card uses `class="work-card work-card--featured"` and takes the full grid row in a side-by-side layout (currently Idyll). The featured card expects a portrait poster (`.work-poster--portrait`); other cards expect 16:9.

### Lite YouTube embeds
For YouTube credits, the poster `<div>` carries `class="lite-yt"` and `data-video-id="..."`. It shows the thumbnail with a play-button overlay. Click or keyboard-activate swaps the element for a `<iframe src="https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0">`. This keeps initial page weight low — iframes only load on intent. Currently used on the Lola, Not Like Other Girls, and Marty Supreme cards.

### Fallback poster
For credits without art, use `class="work-poster work-poster--text"` with a `<span class="poster-title">` to render a typographic poster (gradient background + serif title). `.work-poster--alt` switches the gradient to deep green for the acting bucket so the buckets read distinct.

## Known constraints when sourcing material

- **IMDB is behind an AWS WAF challenge.** Automated `curl` / WebFetch against `imdb.com/title/*` or name pages returns a challenge page, not HTML. Posters can sometimes be sourced by extracting `m.media-amazon.com` image URLs from search snippets, or by asking the user to drop the file in the repo root via the GitHub web UI (this is the standard escape hatch).
- **LinkedIn is auth-walled.** WebFetch against `linkedin.com/in/elizapaprin/` returns ~1.5kb login HTML. When experience / Dean's List / new internship details are needed, ask the user to paste the relevant section.
- **Festival pages are scrapeable.** Beverly Hills FF, Dances with Films, StageSceneLA, etc. expose `og:image` meta and inline `<img>` tags via plain `curl` with a desktop UA. Useful for posters and stills.
- **YouTube thumbnails are publicly hosted** at `https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg` and download with no UA tricks.

## User-specific feedback to apply

- **No fake buttons / redundant CTAs.** Don't add a button unless it goes somewhere unique. A `mailto:` in the hero when Contact already lists the email reads as filler — drop it. See [~/.claude/projects/-Users-matthewfrank-Documents-Personal-Eliza/memory/feedback_no_fake_buttons.md](../../.claude/projects/-Users-matthewfrank-Documents-Personal-Eliza/memory/feedback_no_fake_buttons.md).
- **Producer-first framing.** The site is for a job hunt in video production / producing. When in doubt, foreground producing credits, fold acting/PA work into the appropriate filter bucket or Additional Credits, and keep the design editorial-clean rather than actor-headshot-y.
