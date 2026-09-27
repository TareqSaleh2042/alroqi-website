# Al-Roqi — Next.js site

This is the Next.js (App Router, JavaScript) port of the static Al-Roqi
landing page. It was converted 1:1 from the original `live.html` +
`src/styles.css` — same design, same copy, same sticky hero → About
"curtain reveal" effect, same buttery inertia scroll, same scroll-reveal
animations and the same filterable Completed Projects grid — just rebuilt
as React components instead of one big HTML file with a `<script>` tag.

## Running it

You'll need [Node.js](https://nodejs.org) 18.18 or newer installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. Any change you save under
`components/` or `app/` will hot-reload instantly.

To build a production version:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js       Root layout — loads the IBM Plex Sans Arabic font and app/globals.css
  page.js         Assembles every section, in the same order as the original page
  globals.css     The full stylesheet, ported unchanged from src/styles.css
components/
  ScrollFX.js     Wheel-based inertia smooth scrolling + the parallax updater
                  (ported from the inline <script>, unchanged behavior)
  Header.js       Navbar with the mobile menu (now React state instead of
                  classList.toggle)
  Hero.js / Statement.js
                  The pinned hero + the "Our Point of View" section that
                  slides over it (the position:sticky curtain-reveal effect)
  Numbers.js, Services.js, Guarantee.js, Process.js,
  Videos.js, Testimonials.js, Proof.js, Partners.js,
  Leadership.js, FAQ.js, Contact.js, Footer.js
                  One component per section
  Projects.js     The filterable Completed Projects grid (villa type + area
                  filters are now React state instead of manual DOM classes)
  BrandLogo.js / BrandMark.js
                  The Al-Roqi mascot mark + wordmark, shared by the header
                  and footer
hooks/
  useReveal.js    The IntersectionObserver "fade up on scroll" effect,
                  ported to a reusable hook
```

## What changed vs. the static site, and why

- **Menu toggle, project filters, and the contact form's "Thank you" state**
  are now React `useState` instead of manual `classList` / `innerHTML`
  changes — same visual result, idiomatic React.
- **Scroll-reveal** is a small `useReveal()` hook (one `IntersectionObserver`
  per element) instead of one shared observer wired up in a `<script>` tag.
- **Smooth scrolling, the wheel-based inertia effect, and the parallax
  `[data-parallax]` updater** live in `components/ScrollFX.js`, mounted once
  on the page — the logic itself is unchanged from the static site.
- **The font** is loaded through `next/font/google` instead of a CSS
  `@import`, which self-hosts it at build time (faster, no external request
  at runtime).
- Nothing about the visual design, copy, or layout was changed — this is a
  like-for-like rebuild, not a redesign.

## Note on this build

This project's source files were authored and syntax-checked (server-rendered
with React to confirm every component is valid and renders the expected
markup) in an environment without access to the npm registry, so `npm install`
has not been run here yet — run it on your own machine as the first step
above. If anything looks off after `npm run dev`, it's most likely a small
thing (e.g. a Next.js version quirk) rather than a structural issue, since the
whole component tree was verified to render correctly before delivery.
