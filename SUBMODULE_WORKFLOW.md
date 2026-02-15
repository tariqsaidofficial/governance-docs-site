# Git Submodule Workflow for EATGF Framework

**Effective Date:** February 15, 2026
**Status:** Active
**Authority:** Phase 2 Repository Governance Implementation

---

## Overview

The `eatgf-framework` repository is maintained as a **Git submodule** within the `governance-docs-site` repository at the path `framework/`.

This enforces a **single source of truth** principle:

- **Authoritative source:** `github.com/tariqsaidofficial/eatgf-framework` (main branch)
- **Mirror location:** `governance-docs-site/framework/` (submodule)
- **Direction of sync:** Unidirectional (eatgf-framework → governance-docs-site)

---

## Submodule Configuration

### Current Setup

```
Repository: governance-docs-site
Submodule name: framework
Path: framework/
URL: https://github.com/tariqsaidofficial/eatgf-framework.git
Branch: main
```

### Location in .gitmodules

```ini
[submodule "framework"]
    path = framework
    url = https://github.com/tariqsaidofficial/eatgf-framework.git
    branch = main
```

---

## Developer Workflows

### After Cloning governance-docs-site

If you clone `governance-docs-site` for the first time, the framework submodule will be empty. Initialize it:

```bash
cd governance-docs-site
git submodule init
git submodule update --init --recursive
```

Or in one command:

```bash
git clone --recurse-submodules https://github.com/tariqsaidofficial/governance-docs-site.git
```

### Updating the Framework Submodule

When new changes are merged to `eatgf-framework/main`, update the submodule reference:

```bash
cd governance-docs-site
git submodule update --remote framework
git add framework
git commit -m "chore: update framework submodule to latest [commit hash]"
git push
```

### Checking for New Changes

To see if the submodule has uncommitted changes:

```bash
cd governance-docs-site
git status
git submodule foreach git status
```

### Verifying Current Commit

Check which commit of `eatgf-framework` the submodule is pinned to:

```bash
cd governance-docs-site
git submodule status
# Output: [commit-hash] framework (branch/tag info)
```

Or view in the submodule itself:

```bash
cd governance-docs-site/framework
git log -1 --oneline
```

---

## Important Rules

### ✅ DO

- [ ] Edit framework files in `eatgf-framework` repository
- [ ] Commit and push changes to `eatgf-framework`
- [ ] Update submodule reference in `governance-docs-site` after `eatgf-framework` changes
- [ ] Use `git submodule update --remote` to sync automatically
- [ ] Document submodule pin in commit messages (include commit hash)

### ❌ DON'T

- [ ] Edit framework files directly in `governance-docs-site/framework/`
- [ ] Push changes from `governance-docs-site` into the submodule
- [ ] Create branches or tags in the submodule without coordinating in source
- [ ] Leave submodule in detached head state (update to branch ref)
- [ ] Commit submodule path without updating to intentional commit

---

## Synchronization Procedures

### Standard Update Cycle (After Framework Changes)

**When to trigger:** After any merged PR to `eatgf-framework/main`

**Steps:**

1. **In `eatgf-framework` (source):**

   ```bash
   git log -1 --oneline  # Note the commit hash
   ```

2. **In `governance-docs-site` (consumer):**

   ```bash
   git submodule update --remote framework
   git add framework
   git commit -m "chore: update framework submodule to [COMMIT_HASH]

   Syncs:
   - Latest EATGF changes from eatgf-framework.git
   - Commit: [COMMIT_HASH]"
   git push
   ```

3. **Verify in CI/CD:** Ensure both repos pass checks after any framework update

### Emergency Re-sync (If Divergence Occurs)

If `governance-docs-site/framework/` has local uncommitted changes, discard them:

```bash
cd governance-docs-site/framework
git checkout -- .             # Discard local changes
cd ../
git submodule update --remote framework  # Reset to remote
```

**Note:** This is a destructive operation. Use only if framework divergence is detected and eatgf-framework is confirmed as authoritative source.

---

## Portal Documentation (docs/ folder)

The `governance-docs-site/docs/` folder contains portal-specific Docusaurus content NOT synced from the submodule.

This includes:

- Navigation pages (sidebars.js generated pages)
- Custom portal pages
- Blog content
- Portal-specific guides

**These files are independently maintained** and do not sync from the submodule.

---

## Phase 2 Status

- ✅ Submodule configured in governance-docs-site
- ✅ Framework directory now a submodule (not duplicate files)
- ✅ All 111 canonical files present via submodule
- ✅ Phase 1 changes synchronized (MCM v1.0-Foundation, Layer 03 refactor, etc.)
- ✅ Single source of truth established (eatgf-framework is authoritative)
- ⏳ Phase 3: Populate remaining Layer 08 empty directories (deferred)

---

## Reference Commits

| Date         | Commit  | Description                                        |
| ------------ | ------- | -------------------------------------------------- |
| Feb 15, 2026 | 51fb96d | Phase 1 complete: Framework submodule synchronized |
| Feb 15, 2026 | f7abc75 | eatgf-framework: Phase 13 SLA Unification (source) |

---

## Questions or Issues

- **Submodule not initializing?** Use `git submodule update --init --recursive`
- **Divergence detected?** Run emergency re-sync procedure above
- **Framework updates not showing?** Verify `git submodule update --remote` was run

---

**Last Updated:** February 15, 2026
**Next Review:** August 2026 (per MCM review cycle)
