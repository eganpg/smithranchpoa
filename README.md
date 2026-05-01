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
| Dues Payment | `dues.html` | Stripe payment link for annual dues |
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
Each page has its own copy of the nav. If you change a link, update it in every HTML file.

### Updating the copyright year
The year appears in the footer of each page. Search for the year and update across all files.

---

## Stripe Dues Payment

The `dues.html` page uses a **Stripe Payment Link** (not embedded Stripe.js — just a redirect link).

To update or replace the payment link:
1. Log in to [Stripe Dashboard](https://dashboard.stripe.com) → Products → Payment Links
2. Create or edit a Payment Link for annual dues
3. In `dues.html`, replace the Stripe URL (search for `buy.stripe.com`) in the two places it appears

The current link is configured for:
- Product: Smith Ranch POA Annual Dues
- Amount: Customer-entered (minimum $300)
- Custom fields: Lot/Property Number, Dues Year

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
- **Mobile menu** — JavaScript toggles the nav on screens under 768px
- **Gate key form** — uses `mailto:` so it opens the visitor's email client; no server-side processing
- **Fonts** — Google Fonts (Inter, Raleway) loaded via CDN link in each page's `<head>`
