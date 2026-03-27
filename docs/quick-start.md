# Quick Start Guide – Enterprise AI-Aligned Technical Governance Framework (EATGF)

Get your EATGF v1.1 governance workflow running quickly with deterministic evaluation and evidence-ready outputs.

## Phase 1: Setup (30-45 min)

### Step 1: Understand Core Artifacts

- [ ] Read [Engine Overview](./engine.md)
- [ ] Read [Whitepaper v1.1](./whitepaper.md)
- [ ] Read [Annex v1.1](./annex.md)

### Step 2: Prepare Input Files

- [ ] Choose org profile template:
  - `docs/templates/org_profile.saas.json`
  - `docs/templates/org_profile.onprem.json`
- [ ] Start from `docs/templates/evidence.blank.json`
- [ ] Use `docs/templates/evidence.example.json` as reference

### Step 3: Fill Evidence Correctly

- [ ] Follow [Evidence Guide](./evidence-guide.md)
- [ ] Use only supported statuses:
  - `COMPLIANT`
  - `NON_COMPLIANT`
  - `PARTIAL`
  - `NOT_TESTED`

**Phase 1 Deliverable:** `org_profile.json` + `evidence.json`

---

## Phase 2: Run Engine (10 min)

### Step 4: Validate Registry

```bash
python -m eatgf_engine.cli.main validate-registry registry_v1.1.json
```

### Step 5: Evaluate Compliance

```bash
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json evidence.json --output-json compliance_report.json
```

**Phase 2 Deliverable:** deterministic terminal output + `compliance_report.json`

---

## Phase 3: Regression Safety Check (5 min)

Run the v1.1 CI-equivalent checks locally:

```bash
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json tests/ci_zero_evidence.json
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json tests/ci_invalid_status.json && exit 1 || exit 0
```

Expected behavior:

- Zero evidence should return score `0.0%` without crash.
- Invalid status should fail fast.

---

## Useful Links

- [EATGF Engine Repository](https://github.com/tariqsaidofficial/eatgf-engine)
- [EATGF Framework Repository](https://github.com/tariqsaidofficial/eatgf-framework)
- [Governance Docs Portal Repository](https://github.com/tariqsaidofficial/governance-docs-site)

The quick-start is intentionally focused on v1.1 operational clarity. v1.2 planning (Strict Mode / BAI) starts only after this baseline is fully adopted.
