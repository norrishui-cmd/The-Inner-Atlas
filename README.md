# The Inner Atlas MVP v1

An Astro 5, static-first editorial product for quiet travel, personal retreats, and place discovery.

## Architecture

- Astro + strict TypeScript, with minimal client JavaScript.
- File-backed Content Collections with typed editorial, SEO, review, relationship, and source metadata.
- A generic collection route renders published editorial pages; Home, Builder, 404, and robots use dedicated routes.
- The Personal Retreat Builder uses eight typed archetypes and explainable weighted scoring across current state, intention, time, setting, and landscape.
- Newsletter calls a provider-agnostic JSON endpoint. Without `PUBLIC_NEWSLETTER_ENDPOINT`, the UI truthfully reports that delivery is not connected.
- Analytics exposes a small typed event layer and safely becomes a no-op until an analytics data layer is installed.

## Environment

Copy `.env.example` to `.env` and configure values only when providers are ready.

## Commands

```sh
npm install
npm run dev
npm run build
```

`npm run build` includes `astro check`.

## SEO checklist

- Unique titles and descriptions from collection metadata
- Absolute canonical URLs from one site configuration
- Open Graph and X cards
- XML sitemap via the official Astro integration
- robots.txt with sitemap discovery
- Article / TouristAttraction JSON-LD
- Breadcrumb navigation on every collection page
- Published-only static generation; drafts are excluded
- `noindex` on privacy and terms pages
- Contextual internal links across clusters and into the Builder

## Known gaps before production

- Replace the placeholder canonical domain in `astro.config.mjs` with the production domain.
- Connect and test the newsletter provider; add provider-specific privacy and retention language.
- Add the real analytics loader and consent handling required for launch markets.
- Commission or license original place photography and create a production social card.
- Have legal counsel review Privacy and Terms.
- Expand editorial review and citations before presenting the MVP as a mature publication.
