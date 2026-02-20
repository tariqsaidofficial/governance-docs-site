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

Clone the repository and run the engine with Python 3.10+:

```bash
git clone https://github.com/tariqsaidofficial/eatgf-engine.git
cd eatgf-engine
python eatgf_dynamic_validator.py --registry eatgf_engine/registry_v1.1.json --org eatgf_engine/org_profile.json --evidence eatgf_engine/evidence.json --output-json compliance_report.json
```

## CLI Example

```bash
python eatgf_dynamic_validator.py --registry eatgf_engine/registry_v1.1.json --org eatgf_engine/org_profile.json --evidence eatgf_engine/evidence.json --output-json compliance_report.json
```

## GitHub Repository

[EATGF Engine on GitHub](https://github.com/tariqsaidofficial/eatgf-engine)
