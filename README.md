# Smith Ranch POA Website

Official website for the Smith Ranch Property Owners Association, serving the community at smithranchtx.com.

## Overview

Static HTML site — no build tools, backend, or server required. Pages are edited directly and deployed automatically via GitHub Pages.

**Live site:** https://smithranchtx.com  
**Repository:** https://github.com/eganpg/smithranchpoa

---

## Site Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Announcements, quick links, hero section |
| Documents | `documents.html` | PDFs: meeting minutes, bylaws, treasurer reports, newsletters |
| Links | `links.html` | Curated external links (utilities, county, HOA resources) |
| Gate Key Request | `key-request.html` | Form that opens a pre-filled email to the POA |
| Dues Payment | `dues.html` | Stripe payment link for annual dues — **not linked in the navbar, not live** (see below) |
| Payment Success | `payment-success.html` | Confirmation page shown after dues payment |

---

## Deployment

Hosting is via **GitHub Pages** on the `main` branch. There is no build step.

**To deploy changes:** commit and push to `main` — the site updates automatically within a minute or two.

The `CNAME` file in the repo root tells GitHub Pages to serve the site at `smithranchtx.com`. DNS is configured with a CNAME record pointing the domain to GitHub Pages.

---

## Common Maintenance Tasks

### Adding a document
1. Upload the PDF to the appropriate subfolder under `assets/files/` (e.g., `assets/files/minutes/`)
2. Add a link to it in `documents.html` following the existing pattern

### Updating announcements
Edit the hero/announcement section in `index.html` directly.

### Adding a meeting agenda or minutes
Upload the PDF to `assets/files/` and add a link in `documents.html` under the correct expandable section.

### Updating external links
Edit `links.html`.

### Updating the navigation
The navbar is a shared component — edit **`js/navbar.js`** and all pages update at once.

To add or remove a nav link, find the `<ul class="nav-links">` block in `navbar.js` and add or remove a `<li>` entry there.

### Updating the copyright year
The year appears in the footer of each page. Search for the year and update across all files.

---

## Stripe Dues Payment

> **Not live.** `dues.html` is not linked in the navbar and is not accessible to visitors until the steps below are completed.

The page is built and ready — it just needs a real Stripe Payment Link and then a nav link to go live.

### To activate dues payment

**Step 1 — Configure Stripe:**
1. Log in to [Stripe Dashboard](https://dashboard.stripe.com) → Products → Payment Links
2. Create a Payment Link with these settings:
   - Product: Smith Ranch POA Annual Dues
   - Amount: Customer-entered (minimum $300)
   - Custom fields: Lot/Property Number, Dues Year
3. Copy the generated URL (format: `https://buy.stripe.com/xxxxxxxx`)

**Step 2 — Add the URL to the page:**
1. Open `dues.html` and search for `buy.stripe.com`
2. Replace the placeholder URL in the two places it appears with your new link

**Step 3 — Add to the navbar:**
1. Open `js/navbar.js` and uncomment the `dues.html` line
2. Commit and push to deploy

---

## File Structure

```
smithranchpoa/
├── index.html
├── documents.html
├── links.html
├── key-request.html
├── dues.html
├── payment-success.html
├── js/
│   └── navbar.js          # Shared navbar component (injected into every page)
├── css/
│   └── style.css          # Legacy base styles
├── assets/
│   ├── images/
│   │   └── logo.jpg
│   └── files/             # All PDFs served from here
│       ├── minutes/
│       ├── newsletters/
│       └── treasurer_reports/
├── deprecated/            # Old page backups (not live)
├── CNAME                  # Domain config for GitHub Pages
└── README.md
```

---

## Tech Notes

- **No dependencies** — `package.json` is empty, no npm needed
- **No CMS** — all content is edited directly in HTML files
- **Styling** — each page has inline CSS using a shared color palette (dark green `#1e3a2f`, gold `#b8962e`, cream `#f4f2ed`)
- **Navbar component** — `js/navbar.js` injects the `<header>` into every page and handles the mobile menu toggle; edit once, updates everywhere
- **Mobile menu** — hamburger toggle activates on screens under 768px
- **Gate key form** — uses `mailto:` so it opens the visitor's email client; no server-side processing
- **Fonts** — Google Fonts (Inter, Raleway) loaded via CDN link in each page's `<head>`
