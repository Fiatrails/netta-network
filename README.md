# netta.network

Marketing site for **NETTA — The Settlement Computer**.

Operated by FiatRails Foundation Ltd (Cayman Islands).

## Status

**Phase 1 — Coming Soon placeholder.** Full marketing site lands in Phase 3 (Aug-Sep 2026). Public reveal anchored to Sibos Miami, 28 Sep 2026.

## Stack

- Static HTML / CSS — no framework, no build step
- Deployed via Cloudflare Pages from this GitHub repo (`main` branch)
- Inter (Google Fonts) as the single web font

## Brand colors

| Name | Hex |
|---|---|
| Deep Navy | `#0B1D33` |
| Teal | `#2AA39A` |
| Light Gray | `#E6E9EE` |
| Off White | `#F7F8FA` |

Source media kit lives outside this repo. See `02_Portfolio_Strategy/NETTA_Brand_Transition_Operational_Plan_15Jun2026.md` in the Obsidian vault for canonical guidance.

## File map

```
/                       index.html (placeholder)
/site.webmanifest       PWA manifest
/robots.txt
/sitemap.xml
/favicon.ico
/icons/                 favicons + app icons (16/32/180/192/512)
/assets/                hero logo, icon, OG preview
```

## Deploy

Cloudflare Pages auto-deploys from `main` on push. Build command: none. Output directory: `/`.

## Editorial guardrails

- No mention of "rebrand" or transition language on public surfaces
- No FiatRails wordmark in hero (Foundation reference in footer only)
- No specific pilot names, no issuer-as-partner framing, no PROV-008 / PROV-010 references
- Architecture-level language only

## Related docs (vault)

- `02_Portfolio_Strategy/NETTA_Brand_Transition_Operational_Plan_15Jun2026.md`
- `02_Portfolio_Strategy/Brand_TM_Domain_Availability_Scan_NETTA_15Jun2026.md`
- `02_Portfolio_Strategy/Board_Announcement_Strategy_FT_Lead_12Jun2026.md`
