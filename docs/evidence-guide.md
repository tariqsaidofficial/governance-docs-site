---
slug: /evidence-guide
sidebar_position: 11
---

# Evidence Guide (v1.1)

This guide explains how to build `evidence.json` for the EATGF Engine without schema errors.

## Supported Status Values

Only the following values are valid:

- `COMPLIANT`
- `NON_COMPLIANT`
- `PARTIAL`
- `NOT_TESTED`

Any other value fails fast during evaluation.

## Evidence File Structure

Each key must be a valid control ID from `registry_v1.1.json`.

```json
{
  "EATGF-EDM-GOV-01": {
    "status": "COMPLIANT"
  },
  "EATGF-DSS-VULN-01": {
    "status": "NON_COMPLIANT"
  }
}
```

## Recommended Workflow

1. Start with `docs/templates/evidence.blank.json`.
2. Fill statuses for controls where evidence exists.
3. Keep missing controls absent or set them to `NOT_TESTED`.
4. Run:

```bash
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json evidence.json --output-json compliance_report.json
```

## Common Validation Failures

- Unknown control ID in evidence
- Duplicate control key
- Invalid status value
- Invalid `evidence_metrics` type

## About `evidence_metrics`

`evidence_metrics` is reserved for future expansion and is not required for v1.1 baseline adoption.

## Templates

- `docs/templates/evidence.blank.json`
- `docs/templates/evidence.example.json`
- `docs/templates/org_profile.saas.json`
- `docs/templates/org_profile.onprem.json`
