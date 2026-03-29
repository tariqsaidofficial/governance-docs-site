# PWA Implementation and HTML Template Validation

## Scope

This document records the production-grade PWA setup for the EATGF portal and validates the generated HTML integration points.

## Implemented Components

1. Docusaurus PWA plugin enabled.
2. Web app manifest published at `/manifest.json`.
3. Dedicated app icons generated and published:
   - `/img/pwa-192x192.png`
   - `/img/pwa-512x512.png`
   - `/img/apple-touch-icon.png`
4. Service worker generation enabled through Docusaurus build pipeline.
5. Mobile install metadata added in `pwaHead`:
   - `theme-color`
   - `apple-mobile-web-app-capable`
   - `mobile-web-app-capable`
   - `apple-touch-icon`

## Manifest Configuration

The manifest defines:

- `display: standalone`
- `start_url: /?source=pwa`
- `scope: /`
- Icons with `purpose: any maskable`
- Locale metadata (`lang`, `dir`)
- Categories for app store classification

## Build Validation

Validation was performed with `npm run build` in the portal workspace.

Expected build output:

- `build/sw.js`
- `build/sw.js.map`
- `build/manifest.json`

These files confirm that offline caching and installability metadata are generated.

## HTML Template Validation (Generated Output)

The generated template inspected was `build/index.html`.

Confirmed integration points:

- `<link rel="manifest" href="/manifest.json">`
- `<meta name="theme-color" content="#0d9488">`
- `<link rel="apple-touch-icon" ...>`

Note: The portal uses Docusaurus and React, so the final HTML template is generated at build time rather than manually authored as a static page template.

## Operational Notes

1. Browser install prompt behavior varies by platform and engagement heuristics.
2. Existing runtime warning related to `vscode-languageserver-types` does not block PWA generation.
3. Icons currently originate from existing project artwork and are scaled to PWA dimensions.
