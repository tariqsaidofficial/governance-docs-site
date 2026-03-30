---
sidebar_label: Quick Start
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
  GovSplit,
  GovTitle,
} from '@site/src/components/docs';

import {
  ClipboardList,
  FileJson,
  FolderOpen,
  GitBranch,
  ListChecks,
  RotateCcw,
  Terminal,
} from 'lucide-react';

# Quick Start Guide

<GovHero
  badge={<GovBadge icon={Terminal} variant="phase">Phase-Based Execution · v1.1 Baseline</GovBadge>}
  title="EATGF Quick Start"
  description="Run deterministic compliance evaluation with evidence-ready outputs in three phases: setup, execution, and regression safety checks."
  actions={[
    { href: './engine', label: 'Open Engine Guide' },
    { href: './evidence-guide', label: 'Open Evidence Guide', variant: 'secondary' },
  ]}
/>

## Phase 1: Setup (30-45 min)

<GovMiniBadge variant="section">Section 01</GovMiniBadge>

<GovCard>
  <GovSplit
    left={
      <>
        <GovTitle icon={FolderOpen}>Step 1: Understand Core Artifacts</GovTitle>
        <GovChecklist
          items={[
            <>Read <a href="./engine">Engine Overview</a></>,
            <>Read <a href="./whitepaper">Whitepaper v1.1</a></>,
            <>Read <a href="./annex">Annex v1.1</a></>,
          ]}
        />
      </>
    }
    right={
      <>
        <GovTitle icon={FileJson}>Step 2: Prepare Input Files</GovTitle>
        <GovList
          items={[
            'Choose org profile template: docs/templates/org_profile.saas.json or docs/templates/org_profile.onprem.json',
            'Start from docs/templates/evidence.blank.json',
            'Use docs/templates/evidence.example.json as reference',
          ]}
        />
      </>
    }
  />

  <GovCallout type="info" icon={ClipboardList} title="Step 3: Fill Evidence Correctly">
    Follow Evidence Guide and use only supported statuses: COMPLIANT, NON_COMPLIANT, PARTIAL, NOT_TESTED.
  </GovCallout>

  <GovCallout type="success" icon={ListChecks} title="Phase 1 Deliverable">
    org_profile.json + evidence.json
  </GovCallout>
</GovCard>

## Phase 2: Run Engine (10 min)

<GovMiniBadge variant="section">Section 02</GovMiniBadge>

<GovCard>
  <GovTitle icon={Terminal}>Step 4: Validate Registry</GovTitle>
  <GovCodePanel
    label="VALIDATE_REGISTRY.SH"
    language="bash"
    code={`python -m eatgf_engine.cli.main validate-registry registry_v1.1.json`}
  />

  <GovTitle icon={GitBranch}>Step 5: Evaluate Compliance</GovTitle>
  <GovCodePanel
    label="EVALUATE_COMPLIANCE.SH"
    language="bash"
    code={`python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json evidence.json --output-json compliance_report.json`}
  />

  <GovCallout type="success" icon={ListChecks} title="Phase 2 Deliverable">
    Deterministic terminal output + compliance_report.json
  </GovCallout>
</GovCard>

## Phase 3: Regression Safety Check (5 min)

<GovMiniBadge variant="section">Section 03</GovMiniBadge>

<GovCard>
  <GovTitle icon={RotateCcw}>Run CI-Equivalent Checks Locally</GovTitle>
  <GovCodePanel
    label="REGRESSION_CHECKS.SH"
    language="bash"
    code={`python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json tests/ci_zero_evidence.json
python -m eatgf_engine.cli.main evaluate-compliance registry_v1.1.json org_profile.json tests/ci_invalid_status.json && exit 1 || exit 0`}
  />
  <GovChecklist
    items={[
      <>Zero evidence should return score <strong>0.0%</strong> without crash.</>,
      <>Invalid status should fail fast.</>,
    ]}
  />
</GovCard>

## Useful Links

<GovLinkGrid
  items={[
    {
      href: 'https://github.com/tariqsaidofficial/eatgf-engine',
      title: 'EATGF Engine Repository',
      description: 'Runtime engine, CLI workflows, and deterministic evaluator.',
      icon: Terminal,
    },
    {
      href: 'https://github.com/tariqsaidofficial/eatgf-framework',
      title: 'EATGF Framework Repository',
      description: 'Primary governance framework and control architecture baseline.',
      icon: ClipboardList,
    },
    {
      href: 'https://github.com/tariqsaidofficial/governance-docs-site',
      title: 'Governance Docs Portal Repository',
      description: 'Documentation portal source and Docusaurus implementation.',
      icon: FolderOpen,
    },
  ]}
/>

<GovCallout type="info" icon={ListChecks} title="Scope Note">
  This quick start is intentionally focused on v1.1 operational clarity. v1.2 planning (Strict Mode / BAI) starts only after this baseline is fully adopted.
</GovCallout>
