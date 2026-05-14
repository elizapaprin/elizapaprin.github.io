const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ── Scroll-spy nav highlight ───────────────────────────────── */
const navLinks = document.querySelectorAll(".nav-list a");
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("is-active", isActive);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ── Cursor-following glow behind the hero ──────────────────── */
const hero = document.querySelector(".hero");
if (hero && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener(
    "pointermove",
    (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    },
    { passive: true }
  );
}

/* ── Scroll-reveal: fade + slide elements as they enter ─────── */
const slideSelectors = [
  ".section-header",
  ".timeline-item",
  ".edu-card",
  ".about-copy",
  ".about-side",
  ".contact-list li",
  ".additional-credits",
];
const fadeSelectors = [".poster-card"];

const tagReveal = (el, variant) => {
  el.classList.add("reveal");
  if (variant) el.classList.add(`reveal--${variant}`);
};

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
};

if (!prefersReducedMotion) {
  slideSelectors.forEach((sel) =>
    document.querySelectorAll(sel).forEach((el) => tagReveal(el, "slide"))
  );
  fadeSelectors.forEach((sel) =>
    document.querySelectorAll(sel).forEach((el) => tagReveal(el))
  );

  document
    .querySelectorAll(".poster-grid > .poster-card")
    .forEach((card, i) => {
      card.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 0.07}s`);
    });

  document
    .querySelectorAll(".timeline > .timeline-item")
    .forEach((item, i) => {
      item.style.setProperty("--reveal-delay", `${i * 0.08}s`);
    });

  document
    .querySelectorAll(".contact-list li")
    .forEach((item, i) => {
      item.style.setProperty("--reveal-delay", `${i * 0.06}s`);
    });

  const revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 }
    );
    revealTargets.forEach((el) => {
      // Pre-mark in-view elements so they don't flash on load. IO will then
      // observe them and keep is-visible in sync with viewport intersection
      // in both scroll directions.
      if (isInViewport(el)) el.classList.add("is-visible");
      revealIO.observe(el);
    });
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }
}

/* ── Work filter (with crossfade) ───────────────────────────── */
const filterButtons = document.querySelectorAll(".filter-btn");
const posterGrid = document.querySelector(".poster-grid");
const posterCards = document.querySelectorAll(".poster-grid > .poster-card");

const applyFilter = (filter) => {
  posterCards.forEach((card) => {
    const matches = filter === "all" || card.dataset.role === filter;
    card.hidden = !matches;
  });
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (!posterGrid || prefersReducedMotion) {
      applyFilter(filter);
      return;
    }

    posterGrid.classList.add("is-fading");
    setTimeout(() => {
      applyFilter(filter);
      posterGrid.classList.remove("is-fading");
    }, 220);
  });
});

/* ── Lite YouTube embed ─────────────────────────────────────── */
function activateLiteYT(el) {
  const id = el.dataset.videoId;
  if (!id) return;
  const iframe = document.createElement("iframe");
  iframe.className = "lite-yt-frame";
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  iframe.title = el.getAttribute("aria-label") || "YouTube video player";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  el.replaceWith(iframe);
}

document.querySelectorAll(".lite-yt").forEach((el) => {
  el.addEventListener("click", () => activateLiteYT(el));
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activateLiteYT(el);
    }
  });
});

/* ── Sticky header gains a subtle shadow on scroll ──────────── */
const siteHeader = document.querySelector(".site-header");
if (siteHeader) {
  const onScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
