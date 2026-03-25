---
slug: /engine
sidebar_position: 10
---

# EATGF Engine

The EATGF Engine is the deterministic, audit-grade compliance engine for the EATGF framework. It evaluates organizational evidence against the canonical registry and produces machine-verifiable compliance reports.

## What is eatgf-engine?

- Open-source, production-grade compliance engine
- Deterministic: same inputs always yield same outputs
- CLI-based: runs as a command-line tool
- Registry-driven: uses the canonical EATGF registry

## How to Run

Clone the repository and run the engine with Python 3.11+:

```bash
git clone https://github.com/tariqsaidofficial/eatgf-engine.git
cd eatgf-engine
python -m eatgf_engine.cli.main validate-registry registry_v1.1.json
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json evidence.json --output-json compliance_report.json
```

## v1.1 CI Regression Checks

```bash
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json tests/ci_zero_evidence.json
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json tests/ci_invalid_status.json && exit 1 || exit 0
```

## Input Templates

- org profile templates: `docs/templates/org_profile.saas.json`, `docs/templates/org_profile.onprem.json`
- evidence templates: `docs/templates/evidence.blank.json`, `docs/templates/evidence.example.json`
- usage guide: [Evidence Guide](./evidence-guide.md)

## org_profile Contract (v1.1)

`org_profile.json` must contain all fields below:

- `environment` (allowed values only: `Cloud`, `SaaS`, `On-Prem`, `Hybrid`)
- `ai_usage` (boolean only: `true` or `false`)
- `apis_exposed` (boolean only: `true` or `false`)

Validation is fail-fast. Missing fields or invalid values stop execution with explicit error messages.

## GitHub Repository

[EATGF Engine on GitHub](https://github.com/tariqsaidofficial/eatgf-engine)
