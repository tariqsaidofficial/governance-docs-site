# EATGF Submodule Operations Guide

**Repository:** governance-docs-site  
**Submodule:** framework/ → https://github.com/tariqsaidofficial/eatgf-framework.git  
**Architecture:** Authority Layer (eatgf-framework) ↔ Presentation Layer (governance-docs-site)

---

## Architecture Overview

```
governance-docs-site/          ← Presentation Repository
├── framework/                 ← Git Submodule (linked, not copied)
│   ├── 00_FOUNDATION/
│   ├── 01_MANAGEMENT_SYSTEMS/
│   ├── 02_CONTROL_ARCHITECTURE/
│   ├── 03_GOVERNANCE_MODELS/
│   ├── 04_POLICY_LAYER/
│   ├── 05_DOMAIN_FRAMEWORKS/
│   ├── 06_AUDIT_AND_ASSURANCE/
│   ├── 07_REFERENCE_AND_EVOLUTION/
│   └── README.md
├── portal/                    ← Docusaurus Site
│   ├── docusaurus.config.ts   ← Reads docs from ../framework
│   ├── sidebars.ts
│   └── ...
└── .gitmodules                ← Submodule declaration
```

**Key Principle:** No framework files are ever duplicated. The portal reads directly from the submodule. The `eatgf-framework` repository is the single source of truth.

---

## 1. Initial Clone (New Developer Setup)

When cloning governance-docs-site for the first time:

```bash
git clone --recurse-submodules https://github.com/tariqsaidofficial/governance-docs-site.git
cd governance-docs-site
```

If already cloned without `--recurse-submodules`:

```bash
git submodule init
git submodule update
```

---

## 2. Update Framework to Latest

When `eatgf-framework` has been updated and you want the portal to reflect the latest changes:

```bash
cd governance-docs-site

# Pull latest framework content
git submodule update --remote framework

# Stage, commit, and push the pointer update
git add framework
git commit -m "Update EATGF framework submodule to latest commit"
git push
```

This updates the submodule pointer in governance-docs-site to the latest commit on the default branch of eatgf-framework.

---

## 3. Pin Framework to a Specific Tag/Version

To pin the framework to a specific release tag:

```bash
cd framework
git fetch --tags
git checkout EATGF-v1.0-Foundation    # or any specific tag
cd ..

git add framework
git commit -m "Pin framework submodule to EATGF-v1.0-Foundation"
git push
```

---

## 4. Versioning Strategy

### Authority Repository (eatgf-framework)

Version tags are created in the authority repository using semantic naming:

```bash
cd eatgf-framework
git tag EATGF-v1.0-Foundation
git push origin EATGF-v1.0-Foundation
```

**Tag naming convention:**
| Tag | Description |
|-----|-------------|
| `EATGF-v1.0-Foundation` | Foundation Edition release |
| `EATGF-v1.1-Controls` | Control architecture update |
| `EATGF-v2.0-Enterprise` | Major enterprise release |

### Presentation Repository (governance-docs-site)

Docusaurus versioned snapshots are created from the portal:

```bash
cd governance-docs-site/portal

# Ensure submodule is at the desired tag first
cd ../framework && git checkout EATGF-v1.0-Foundation && cd ../portal

# Create Docusaurus version snapshot
npx docusaurus docs:version 1.0
```

This creates a versioned snapshot under `portal/versioned_docs/version-1.0/` that preserves the framework state at that point in time.

---

## 5. Verify Build

After any submodule update, always validate the portal builds cleanly:

```bash
cd governance-docs-site/portal
npm run build
```

Expected: `[SUCCESS] Generated static files in "build".` with no broken links or MDX errors.

---

## 6. CI/CD Considerations

For automated pipelines, ensure submodules are initialized:

```yaml
# GitHub Actions example
steps:
  - uses: actions/checkout@v4
    with:
      submodules: recursive

  - name: Build Portal
    working-directory: portal
    run: |
      npm ci
      npm run build
```

---

## 7. Troubleshooting

| Issue | Resolution |
|-------|-----------|
| `framework/` directory is empty | Run `git submodule init && git submodule update` |
| Build fails with "docs directory not found" | Ensure submodule is initialized and `../framework` exists |
| Submodule points to wrong commit | Use `git submodule update --remote` to get latest, or checkout specific tag |
| Merge conflicts in submodule pointer | Resolve by checking out desired commit in `framework/`, then `git add framework` |

---

## Architectural Constraints

- **NEVER** copy framework files into `portal/docs/`
- **NEVER** modify framework content from the governance-docs-site repository
- **ALWAYS** make content changes in the eatgf-framework repository
- **ALWAYS** use `git submodule update` to propagate changes
- The submodule is read-only from the portal's perspective
