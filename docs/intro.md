---
sidebar_label: Introduction
---

import {
GovBadge,
GovCallout,
GovCard,
GovChecklist,
GovCodePanel,
GovHero,
GovLinkGrid,
GovList,
GovMiniBadge,
GovPillarGrid,
GovSplit,
GovTitle,
} from '@site/src/components/docs';

import {
AccountBalance,
Emergency,
Explore,
Info,
Inventory2,
Lightbulb,
Memory,
MenuBook,
Rocket,
TaskAlt,
VerifiedUser,
Visibility,
Warning,
} from 'lucide-react';

# Introduction

<GovHero
badge={<GovBadge icon={Explore}>Documentation v2.4.0-stable</GovBadge>}
title="Technical Governance Portal"
description="Enterprise AI-Aligned Technical Governance Framework (EATGF) provides a deterministic, audit-defensible system for architecture controls, security policy, AI governance, and operational accountability."
actions={[
{ href: './quick-start', label: 'Start with Quick Start' },
{ href: './engine', label: 'Open Engine Guide', variant: 'secondary' },
]}
/>

## Governance Core Principles

<GovMiniBadge icon={AccountBalance}>Core Governance Layer</GovMiniBadge>

Our governance baseline applies three core principles to every model, policy, and technical deployment in the enterprise environment.

### Principle 1: Ethical AI Deployment

<GovCard>
  <p>
    Ethical AI deployment enforces fairness constraints, risk-based safety rails, and controlled production behavior.
    All high-impact AI workloads must prove policy alignment before release.
  </p>
  <GovSplit
    left={
      <>
        <GovTitle icon={TaskAlt}>Requirements</GovTitle>
        <GovList
          items={[
            'Bi-annual algorithmic bias audits with independent review.',
            'Documented fallback mechanisms for non-deterministic outputs.',
            'PII handling aligned to approved governance constraints.',
          ]}
        />
      </>
    }
    right={
      <GovCallout type="info" icon={Info} title="Implementation Note">
        Models with risk score greater than 0.75 require manual ethics review prior to production token issuance.
      </GovCallout>
    }
  />
</GovCard>

### Principle 2: Algorithmic Transparency

<GovCard>
  <p>
    Every high-impact decision must be traceable: model version, evidence context, and runtime metadata are retained for audit.
  </p>
  <GovCodePanel
    label="METADATA_EXTRACTOR.PY"
    language="PYTHON"
    code={`def log_decision_trace(context, model_id):
  trace_id = generate_uuid()
  registry.capture(trace_id, {
      "timestamp": datetime.now(),
      "weights_hash": model_id.sha256(),
      "input_vector": context.anonymize()
  })
  return trace_id`}
  />
  <GovChecklist
    items={[
      <><strong>Feature Importance:</strong> SHAP or LIME values for critical predictions.</>,
      <><strong>Data Provenance:</strong> Lineage tracking for synthetic and real datasets.</>,
      <><strong>Version Control:</strong> Immutable deployment snapshots per release.</>,
    ]}
  />
  <GovCallout type="warning" icon={Warning} title="Compliance Warning">
    Missing Decision Trace IDs for automated rejection flows is a direct governance violation.
  </GovCallout>
</GovCard>

### Principle 3: Human-in-the-loop Systems

<GovCard>
  <p>
    Automation augments human authority. High-impact operations require approved human override and live intervention capability.
  </p>
  <GovPillarGrid
    items={[
      {
        icon: Visibility,
        title: 'Human Oversight',
        description: 'Real-time monitoring and case-level review workflows.',
      },
      {
        icon: Emergency,
        title: 'Kill Switch',
        description: 'Immediate halt for unsafe behavior or policy drift.',
      },
      {
        icon: Inventory2,
        title: 'Override Logs',
        description: 'Immutable records for all interventions and approvals.',
      },
    ]}
  />
  <GovCallout type="success" icon={Lightbulb} title="Best Practice">
    Trigger human review automatically when output distribution drifts by more than 10% from baseline.
  </GovCallout>
</GovCard>

## Framework Domains

The operational v1.1 engine currently evaluates controls in EDM and DSS, while the full framework structure remains broader for roadmap evolution.

| Domain | Focus                     | Key Controls                            |
| ------ | ------------------------- | --------------------------------------- |
| EDM    | Evaluate, Direct, Monitor | Strategic governance, risk oversight    |
| DSS    | Deliver, Service, Support | Operations, security, incident response |
| MEA    | Monitor, Evaluate, Assess | Performance measurement, compliance     |

## Primary Navigation Paths

<GovLinkGrid
items={[
{
href: './quick-start',
title: 'Quick Start',
description: 'Create valid input files and run the engine workflow.',
icon: Rocket,
},
{
href: './engine',
title: 'Engine Guide',
description: 'Execute deterministic compliance assessment end-to-end.',
icon: Memory,
},
{
href: './evidence-guide',
title: 'Evidence Guide',
description: 'Apply accepted statuses and evidence formatting rules.',
icon: VerifiedUser,
},
{
href: './whitepaper',
title: 'Whitepaper',
description: 'Understand strategic architecture and governance rationale.',
icon: MenuBook,
},
]}
/>

## Source of Truth

Source repository: <https://github.com/tariqsaidofficial/eatgf-framework>

This portal consumes and presents governance content from the authoritative framework repository.
