# Dunhuang Within German and French SEO Expansion

Completed: 2026-07-18

## Scope

- 20 German pages under `/de/`.
- 20 French pages under `/fr/`.
- The English site remains the primary source and is not duplicated wholesale.
- Every localized URL has a self-referencing canonical.
- Every translated set has reciprocal `en`, `de`, `fr`, and `x-default` hreflang links.
- Only real generated routes appear in hreflang and the XML sitemap.

## Localized topics

1. Dunhuang hub
2. Dunhuang travel guide
3. How many days in Dunhuang
4. Mogao Caves
5. Mingsha Mountain
6. Crescent Lake
7. Cave 17 / Library Cave
8. Dunhuang manuscripts
9. Diamond Sutra
10. Dunhuang murals
11. Dunhuang Feitian
12. Nine-Colored Deer
13. Yang Pass
14. Yumen Pass
15. Yardang Geopark
16. Dunhuang Museum
17. Yulin Caves
18. Western Thousand Buddha Caves
19. Three-day Dunhuang itinerary
20. Dunhuang packing list

## SEO implementation

- Locale-aware `<html lang>` values.
- Locale-specific titles, descriptions, headings, navigation and FAQ copy.
- Article, Breadcrumb and FAQPage structured data on every localized page.
- Accessible navigation language dropdown with page-specific destinations instead of generic homepage redirects.
- Localized internal-link clusters for travel, cave history, manuscripts and visual culture.
- Sitemap generation includes every indexable German and French route.

## Quality rules retained

- No full-site machine-translated mirror.
- No localized page canonicalized to English.
- No separate country domain.
- No invented opening hours, prices, access promises, healing claims or spiritual guarantees.
- Current travel details must be checked through official sources.

## Validation

- Astro check: 0 errors, 0 warnings, 0 hints.
- Static build: 167 pages.
- German pages: 20.
- French pages: 20.
- XML sitemap URLs: 164 after the existing privacy, terms, feed and 404 filters.
