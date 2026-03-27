# governance-docs-site — Changelog

**Repository:** tariqsaidofficial/governance-docs-site
**Maintained by:** EATGF Project
**Format:** [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) — Reverse chronological order

---

## [Unreleased]

---

## [1.3.0] — 2026-03-28

**Change Type:** Minor | **Initiated by:** Corrective Action — Post-Incident Recovery
**Scope:** governance-docs-site portal configuration, sidebars, framework submodule layer content

### Incident Record — Portal Regression (2026-03-27 / 2026-03-28)

**Root Cause:** The revert commit `0d854a2` ("Revert: feat: ship themed governance portal refresh") reversed the label and sidebar structure corrections introduced in `38ad4ef`, which were not re-applied when the themed portal was subsequently restored in `7c65b85`. This created a silent regression where configuration appeared correct at the component level but remained broken at the routing and sidebar level.

**Impact Summary:**

| Area                                                  | Before This Release                       | After This Release                 |
| ----------------------------------------------------- | ----------------------------------------- | ---------------------------------- |
| Guides sidebar label                                  | "Getting Started" (regressed)             | "Guides" (correct)                 |
| `ui-mvp-blueprint` in sidebar                         | Missing (regressed)                       | Present                            |
| `ARCHITECTURE_AND_NAVIGATION.md` in Framework sidebar | Visible without category                  | Excluded from build                |
| `HOW_TO_ADOPT_EATGF.md` in Framework sidebar          | Visible without category                  | Excluded from build                |
| `markdown.format`                                     | `'detect'` (risk of MDX parse errors)     | `'md'` (stable, explicit)          |
| Layers 01–07 README content                           | 3-line stubs ("under active development") | Full structured layer descriptions |

**Commits involved in regression chain:**

| Commit    | Action                              | Effect                                             |
| --------- | ----------------------------------- | -------------------------------------------------- |
| `38ad4ef` | Themed portal + sidebar corrections | Correct state                                      |
| `0d854a2` | REVERT of `38ad4ef`                 | Regression: label, sidebar item, format all broken |
| `7c65b85` | Restore themed components only      | Did not fix config regression                      |
| `f999660` | Add framework exclude patterns      | Partial fix — missed two files                     |

### Fixed

- **sidebars.ts** — `docsSidebar` category label restored from `'Getting Started'` to `'Guides'`
- **sidebars.ts** — `'ui-mvp-blueprint'` re-added to sidebar items list (was removed by REVERT)
- **portal/docusaurus.config.ts** — `markdown.format` changed from `'detect'` to `'md'` to prevent MDX parser ambiguity on pure Markdown files
- **portal/docusaurus.config.ts** — Added exclude patterns for `**/ARCHITECTURE_AND_NAVIGATION*` and `**/HOW_TO_ADOPT*` to prevent uncategorised noise pages appearing in the Framework sidebar

### Improved

- **framework/01_MANAGEMENT_SYSTEMS/README.md** — Replaced 3-line stub with full layer description: scope table (ISO 27001, ISO 42001, ISO 31000, Annex A.5.19–5.22), planned documents list, control authority relationship
- **framework/02_CONTROL_ARCHITECTURE/README.md** — Replaced stub with full control domain scope table (MCM 35 controls, ISO/NIST/OWASP/COBIT mappings), planned documents, authority statement
- **framework/03_GOVERNANCE_MODELS/README.md** — Replaced stub with maturity model scope (5-level scale, capability scoring, operating model templates), planned documents, control authority chain
- **framework/04_POLICY_LAYER/README.md** — Replaced stub with published documents index (5 enterprise policies from v1.0-Foundation), planned v1.1 documents, traceability requirement
- **framework/05_DOMAIN_FRAMEWORKS/README.md** — Replaced stub with full domain coverage table (AI, API, Cloud, Secure SDLC, Multi-Tenant SaaS, Zero Trust, Supply Chain), planned documents list
- **framework/06_AUDIT_AND_ASSURANCE/README.md** — Replaced stub with published assurance standards index (4 documents from v1.0-Foundation), ISO 19011:2018 alignment, planned v1.1 documents
- **framework/07_REFERENCE_AND_EVOLUTION/README.md** — Replaced stub with versioned roadmap table (v1.0 / v1.1 / v2.0), scope areas, planned documents

### Verified

- `npm run build` exits successfully with zero errors
- Framework routes: 10 pages (8 layer indexes + 1 METADATA doc + 1 root index)
- Docs routes: 7 pages (`intro`, `quick-start`, `engine`, `evidence-guide`, `ui-mvp-blueprint`, `whitepaper`, `annex`)
- No uncategorised framework root files appear in sidebar or build output

---

## [1.2.0] — 2026-03-27

**Change Type:** Minor
**Scope:** portal theme, landing page, doc components, framework sidebar labels, exclude patterns

### Added

- Full themed portal design restored: Landing, DocCallout, DocCard, DocSectionHeader, DocNextSteps, DocMetaStrip, DocChecklist, DocCardGrid components
- Assessment UI flow: StepIndicator, domainTheme, full page components (Home, Setup, Control, Evidence, Results)
- Lucide icon library integrated
- `portal/src/theme/DocItem/Layout/` — custom doc layout with sidebar-aware theme overrides
- Framework sidebar: `_category_.json` files added to all 8 layers with human-readable labels
- `portal/docusaurus.config.ts` — exclude patterns added to prevent non-doc files appearing in Framework sidebar

### Fixed

- Broken links in framework sidebar caused by missing `_category_.json` configuration

### Commit Reference

- `f999660` — Add framework layer sidebar labels and exclude noise directories
- `7c65b85` — Restore full themed portal design

---

## [1.1.0] — 2026-03-27 (REVERTED — do not reference as stable)

**Change Type:** Minor
**Status:** REVERTED by `0d854a2`

> **Warning:** This release was reverted. It is preserved in the git log as `38ad4ef` (tag: `backup/pre-restore-20260327-181301`).
> The partial revert caused the regression documented in [1.3.0] above.
> Do not cherry-pick or reference this commit directly.

### What this commit contained (for reference only)

- Sidebar label changed from `'Getting Started'` to `'Guides'`
- `'ui-mvp-blueprint'` added to sidebar items
- `markdown.format` set to `'md'`
- Themed portal components (Landing, DocCallout, DocCard, assessment pages)
- Design system documentation files added at repo root

---

## [1.0.0] — 2026-03-26

**Change Type:** Major
**Scope:** Assessment UI, docs wiring, portal structure

### Added

- Assessment UI flow (index, setup, control, evidence, results pages)
- Environment-based API URL configuration
- Docs wired into portal: `intro`, `quick-start`, `engine`, `evidence-guide`, `whitepaper`, `annex`
- `portal/docs/intro.md` — portal-specific intro page
- Navigation bar: Guides, Framework, Project Assessment, GitHub links
- Footer: Framework, Assessment, and Project sections

### Commit Reference

- `da11f9c` — Add assessment UI flow, env-based API URL, and repo cleanup
- `0d5cf0e` — Wire onboarding docs into portal and fix intro link targets
- `3f1a1de` — Close sprint A usability gaps for v1.1 onboarding

---

## Prevention Rules (Post-Incident — Mandatory)

The following rules are mandatory for all future changes to this repository:

| Rule                            | Trigger                                                                           | Action Required                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **No silent reverts**           | Any `git revert` on a commit that touched `sidebars.ts` or `docusaurus.config.ts` | Manual review of all config file states after revert — do not assume the revert result is correct      |
| **Sidebar label audit**         | Any commit touching `sidebars.ts`                                                 | Verify `label` values match navbar `label` values in `docusaurus.config.ts`                            |
| **Build gate**                  | Before every push to `main`                                                       | Run `npm run build` and confirm zero errors                                                            |
| **Exclude list completeness**   | Any new root-level markdown file added to the framework submodule                 | Add an explicit exclude pattern in `docusaurus.config.ts` or ensure file is inside a layer directory   |
| **Stub content standard**       | Any `_category_.json` created without accompanying content                        | README.md must contain at minimum: scope table, planned documents list, control authority relationship |
| **Submodule pointer sync**      | After any edit to `framework/` submodule files                                    | Commit and push the submodule, then update the pointer in this repo                                    |
| **`markdown.format` is `'md'`** | If this setting is ever proposed to change                                        | Requires explicit justification and build verification — default is always `'md'`                      |
