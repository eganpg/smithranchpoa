# Smith Ranch POA - Website Modernization TODO

## Goal
Modernize all pages using `index-dev.html` as the design pattern.
Work in `-dev` copies to avoid disrupting live traffic.
Once all pages are approved, rename `-dev` files to production.

## Standard Pattern (from index-dev.html)
- CSS variables defined inline in `<style>` block (colors, fonts)
- Google Fonts: Inter + Raleway
- Sticky header with logo + hamburger nav (includes Gate Keys link)
- 3-column footer: contact | nav links | copyright
- `body` flex column with `main { flex: 1 }` for sticky footer
- Mobile responsive (768px breakpoint for nav, 640px for footer)
- Hero/welcome section at top of each page

## Pages & Status

| Page              | Dev File               | Status         |
|-------------------|------------------------|----------------|
| Home              | `index-dev.html`       | ✅ Complete     |
| Documents         | `documents-dev.html`   | 🔄 In review   |
| Links             | `links-dev.html`       | ⬜ Not started  |
| Gate Keys         | `key-request-dev.html` | ⬜ Not started  |

## Task List

### Phase 1 - Build Dev Pages
- [x] Create `documents-dev.html` — styled cards, show/hide toggles per section, standardized header/footer
- [x] Clean up `index-dev.html` header — removed stale comments, aligned with documents-dev pattern
- [ ] Create `links-dev.html` — apply standard header/footer/styles, modernize links into card-style layout
- [ ] Create `key-request-dev.html` — apply standard header/footer/styles, update form colors to match green theme (currently uses #004080 blue)

### Phase 2 - Review & Approval
- [ ] Finish reviewing documents-dev.html (in progress — styling consistency being investigated)
- [ ] Review links-dev.html
- [ ] Review key-request-dev.html

### Phase 3 - Go Live
- [ ] Rename `index-dev.html` → `index.html` (backup old first)
- [ ] Rename `documents-dev.html` → `documents.html`
- [ ] Rename `links-dev.html` → `links.html`
- [ ] Rename `key-request-dev.html` → `key-request.html`
- [ ] Update all internal nav links to remove `-dev` references

## Notes
- `key-request.html` already has a working form (mailto-based); preserve all JS logic
- `links.html` nav is missing the Gate Keys link — add in dev version
- `documents.html` has a large commented-out section; keep it commented in dev version
- After go-live, verify all PDF links still resolve correctly
