---
sidebar_position: 2
title: Portal UI Architecture Guide
sidebar_label: UI Architecture Guide
description: Structural guide for the modular Landing and Assessment UI architecture in the EATGF Portal.
---

## Document Purpose

This document defines the target architecture for the Portal UI codebase after modularization, including folder boundaries, ownership rules, and extension guidelines.

For versioned structural history, see the
[UI Architecture Change Log](./portal-ui-architecture-change-log.md).

## Architectural Position

- EATGF Layer Placement: 08_DEVELOPER_GOVERNANCE_LAYER
- Governance Scope: Implementation Standard
- Control Authority Relationship: Implements controls

## Governance Principles

- Single Source of Truth
- Control-Centric Architecture
- Security-by-Design
- Versioned Governance
- Developer-Operational Alignment
- Audit Traceability

## Control Mapping

| EATGF Context                            | ISO 27001:2022 | NIST SSDF  | OWASP             | COBIT |
| ---------------------------------------- | -------------- | ---------- | ----------------- | ----- |
| UI module ownership and boundaries       | A.5.37, A.8.32 | PO.1, PO.3 | ASVS V1           | BAI03 |
| Route-to-component separation            | A.8.28         | PW.1, PW.8 | ASVS V4           | BAI06 |
| Deterministic assessment UX flow         | A.8.27         | PW.9, RV.1 | ASVS V10          | DSS06 |
| Build-time validation and release safety | A.8.31         | RV.1, RV.3 | SAMM Verification | BAI07 |

## Scope

This guide covers:

- Landing page architecture in `src/components/landing`
- Assessment page architecture in `src/components/assessment/pages`
- Route wrapper policy in `src/pages`
- File-purpose header comment standard for TS/TSX/CSS modules

## Target Module Structure

```text
src/
  components/
    landing/
      layout/
      sections/
      components/
      data/
      types.ts
      index.ts
    assessment/
      pages/
      api.ts
      useAssessment.ts
      types.ts
      status.ts
      styles.module.css
  pages/
    index.tsx
    assess/
      index.tsx
      setup.tsx
      evidence.tsx
      results.tsx
      control.tsx
```

## Design Rules

1. Route files in `src/pages` must be thin wrappers that only re-export page components.
2. View logic must live in `src/components/**/pages` or section components, not route files.
3. Reusable UI primitives belong in `components/` folders; static text/config belongs in `data/`.
4. Every TS/TSX/CSS module must start with a short file-purpose header comment.
5. Shared assessment state must remain centralized in `useAssessment` and accessed through approved setters.

## File Purpose Header Standard

Use one short block at the top of each source file:

```text
/*
 * File Purpose:
 * One sentence on what this file owns.
 * One sentence on what this file explicitly delegates.
 */
```

For CSS modules, a one-line comment is acceptable when scope is obvious.

## Developer Checklist

- [ ] Route file is wrapper-only (no business logic)
- [ ] Component placed in the correct layer (layout/section/component/page/data)
- [ ] File-purpose header comment is present and accurate
- [ ] New text content added to data modules when reusable
- [ ] Build completed successfully from `portal/`
- [ ] No lint/type errors in modified files

## Governance Implications

- Risk if not implemented: UI logic drift, duplicate behavior, and fragile release changes.
- Operational impact: Slower onboarding, slower debugging, higher merge conflict frequency.
- Audit consequences: Reduced traceability from route behavior to implementation ownership.
- Cross-team dependencies: Frontend, governance content owners, and quality assurance rely on stable boundaries.

## Validation Workflow

Run from `governance-docs-site/portal`:

```bash
npm run build
```

A change is accepted only when the production build succeeds and modified files report no errors.

## Version Information

- Version: 1.0.0
- Change Type: Major
- Date of Issue: 2026-03-26
- Relation to EATGF Baseline: Implements developer-governance structure for portal UI delivery
