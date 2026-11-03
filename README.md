<<<<<<< HEAD
# Chill-My-Car
=======
# Chill My Car – Vite + React Router

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs ./dist
    npm run preview

## Routes
/ · /services · /services/:slug (6 pages) · /about · /gallery · /brands · /contact · * (404)

## Structure
- `src/lib/data.js` – services, areas, brands, gallery, and service image sources (edit content here)
- `src/lib/icons.js` + `components/Icon.jsx` – SVG icons
- `src/components/` – Nav, Hero, Sections, Simulator, BookingForm, PageParts, GalleryGrid, BrandGrid, Reveal
- `src/pages/` – one file per route; `src/App.jsx` holds routes, layout and scroll handling
- `src/index.css` – design tokens and all styles
- `public/_redirects` – makes direct links (e.g. /about) work on Cloudflare Pages / Netlify

## Media and booking
- Service photos are loaded from Unsplash and the car-brand carousel logos from Car Logos; both need an internet connection. Keep the carousel attribution link in place.
- The booking form validates the contact details and opens WhatsApp with a prefilled message. The visitor still needs to send that message in WhatsApp.
- Update the business phone in `src/lib/data.js` and its contact links if it changes; update the email address in the form and footer if that changes.

## Deploy: GitHub + Cloudflare Pages
1. `git init && git add . && git commit -m "Initial site"` then push to a GitHub repo
2. Cloudflare > Workers & Pages > Create > Pages > Connect to Git
3. Framework preset: Vite (or manual) – Build command `npm run build`, Output directory `dist`, env var `NODE_VERSION=20`
>>>>>>> e23193a (Initial project commit)
