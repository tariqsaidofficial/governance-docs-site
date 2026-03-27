# UI/UX MVP Blueprint v1.1.0

**Status**: Clean — Ready for Design and Implementation
**Version**: 1.1.2 (Patch)
**Date**: March 25, 2026
**Phase**: Product Experience Layer Design
**Owner**: Product & UX

---

## Executive Summary

This blueprint defines the minimum viable user interface for EATGF v1.1 engine integration. The goal is to transform the engine from a command-line tool into an accessible, guided product experience that allows non-deep-technical users (Project Owners, Tech Leads, Security Leads) to conduct AI governance assessments without CLI knowledge.

The MVP is deliberately minimal: 5 screens, 1 primary user journey, zero additional complexity. All computation and validation remains engine responsibility. The UI is a thin input/output shell.

---

## 1. Target Users & Use Cases

### Primary Users (MVP Scope)

- **Project Owner**: Owns governance responsibility; runs assessments annually
- **Tech Lead**: Understands architecture; answers "is AI enabled?"
- **Security Lead**: Evaluates control applicability; owns compliance status
- **Governance/Compliance Officer**: Reviews results; documents decisions

### NOT in MVP Scope

- ❌ General non-technical users (business stakeholders, executives)
- ❌ Advanced external auditors
- ❌ Executive dashboard viewers
- ❌ Multi-project portfolio managers

### User Expectations

Users expect:

- **Clarity**: They understand what each control means without deep governance training
- **Guidance**: The UI explains why controls apply to their project
- **Simplicity**: No complex workflows; 3-5 minutes from start to results
- **Accuracy**: Results match engine constraints (no UI-level calculations)

---

## 2. Core User Journey: "Start a New Project Assessment"

### User Path (Happy Case)

```
1. User arrives at Home
   ↓
2. Clicks "Start Assessment"
   ↓
3. Fills Project Setup form
   - Project name
   - Environment (Cloud/SaaS/On-Prem/Hybrid)
   - AI usage (Yes/No)
   - APIs exposed (Yes/No)
   ↓
4. Clicks "Generate Assessment"
   (UI validates form client-side; no engine call yet)
   ↓
5. User sees Evidence Form
   All 9 v1.1 registry controls displayed
   For each control:
   - Canonical Control ID (as served by engine)
   - Control title
   - Domain
   - Status dropdown (COMPLIANT/NON_COMPLIANT/PARTIAL/NOT_TESTED)
   ↓
6. User sets status for each control
   ↓
7. Clicks "Run Evaluation"
   ↓
8. UI sends ONE request to FastAPI adapter:
   POST /evaluate { org_profile + evidence }
   ↓
9. Adapter calls engine evaluate-compliance
   Engine validates org_profile, validates evidence,
   determines applicability, scores compliance,
   returns full ComplianceReport JSON
   ↓
10. System displays Results Dashboard
    - Overall compliance score
    - Domain breakdown (applicable controls only)
    - Count of statuses
    - "View Details" links
    ↓
11. User clicks "View Detailed Results" or specific control
    ↓
12. Sees Control Detail View
    - Canonical Control ID, title, domain
    - Atomic objective
    - Authority (ISO/NIST/OWASP/COBIT)
    - Current status
    - Why it matters
    - Evidence expectation
    (All metadata sourced from engine adapter response, not from frontend static data)
```

### Error Cases

**Case: Invalid org_profile**

```
User fills form with invalid project setup
↓
UI validates before calling engine
↓
Shows inline error: "Environment must be Cloud, SaaS, On-Prem, or Hybrid"
↓
User corrects and resubmits
```

**Case: Engine evaluation fails**

```
User submits evidence to engine
↓
Engine returns validation error (e.g., unknown control ID)
↓
UI displays: "Could not evaluate: [error message]"
↓
User exits to edit evidence
```

### Empty States

- **No assessment yet**: Home shows "Start Assessment" prompt
- **Loading evaluation**: Results screen shows spinner + "Evaluating..."
- **Evaluation returns zero applicable controls**: Results screen shows "No controls applied to your configuration. Review your project setup." with [BACK TO SETUP] link

---

## 3. Screen Specifications

### Screen 1: Home / Overview

**Purpose**: Orient user, provide entry point to assessment, link to resources.

**Layout**:

```
┌─────────────────────────────────────┐
│   EATGF AI Governance Assessment    │
├─────────────────────────────────────┤
│                                     │
│  Hero section:                      │
│  "Evaluate your project's AI        │
│   governance in minutes."           │
│                                     │
│  [START ASSESSMENT] button          │
│  (primary, large)                   │
│                                     │
├─────────────────────────────────────┤
│  Resources:                         │
│  • Whitepaper                       │
│  • Framework                        │
│  • Evidence Guide                   │
│  • FAQ                              │
│                                     │
└─────────────────────────────────────┘
```

**Elements**:

- Title + subtitle (hero)
- `[START ASSESSMENT]` button (routes to Screen 2)
- Resources footer (links to external docs)

**Data Flow**:

- Input: None
- State: Initial
- Output: Navigation to Project Setup

**Transitions**:

- Click "START ASSESSMENT" → Screen 2: Project Setup

---

### Screen 2: Project Setup

**Purpose**: Collect org_profile inputs before generating applicable controls.

**Layout**:

```
┌──────────────────────────────────────┐
│  Project Setup                       │
├──────────────────────────────────────┤
│                                      │
│  Project Name:                       │
│  [________________] (text input)     │
│                                      │
│  Environment:                        │
│  ◉ Cloud                             │
│  ○ SaaS                              │
│  ○ On-Prem                           │
│  ○ Hybrid                            │
│                                      │
│  Does your project use AI?           │
│  ○ Yes    ○ No                       │
│                                      │
│  Are APIs exposed (public/partner)?  │
│  ○ Yes    ○ No                       │
│                                      │
│  [GENERATE ASSESSMENT] [CANCEL]      │
│                                      │
└──────────────────────────────────────┘
```

**Elements**:

- `Project Name`: Text input (free text, no validation)
- `Environment`: 4-choice radio buttons (Cloud, SaaS, On-Prem, Hybrid)
- `AI usage`: 2-choice radio buttons (Yes/No, maps to boolean)
- `APIs exposed`: 2-choice radio buttons (Yes/No, maps to boolean)
- `[GENERATE ASSESSMENT]` button (primary)
- `[CANCEL]` button (secondary, returns to Home)

**Data Flow**:

- Input: None
- Validations:
  - Project name: Required, max 255 chars (warning only, not blocking)
  - Environment: Required, must be one of {Cloud, SaaS, On-Prem, Hybrid}
  - AI usage: Required, boolean
  - APIs exposed: Required, boolean
- Output (on success):

  ```json
  {
    "project_name": "string",
    "org_profile": {
      "environment": "one of Cloud|SaaS|On-Prem|Hybrid",
      "ai_usage": true/false,
      "apis_exposed": true/false
    }
  }
  ```

- Next step: Navigate to Screen 3 (Evidence Form). All 9 v1.1 controls are presented for user status input. No engine call is made at this stage. The single evaluate-compliance call occurs when the user submits.

**Transitions**:

- Click "GENERATE ASSESSMENT" (valid form) → Load Screen 3 with all available controls
- Click "CANCEL" → Back to Screen 1
- Validation error (e.g., missing environment) → Display inline error, stay on Screen 2

**Error Handling**:

```
If environment not selected:
  Error message: "Please select an environment (Cloud, SaaS, On-Prem, or Hybrid)"

If AI usage not selected:
  Error message: "Please indicate whether your project uses AI"

If APIs not selected:
  Error message: "Please indicate whether your project exposes APIs"
```

---

### Screen 3: Evidence Form

**Purpose**: Collect compliance status for each applicable control.

**Layout**:

```
┌─────────────────────────────────────────┐
│  Evidence Form: Project Name            │
│  (Environment: Cloud | AI: Yes | API: Yes) │
├─────────────────────────────────────────┤
│                                         │
│  Instructions: Set status for each      │
│  applicable control.                    │
│                                         │
│  ┌─────────────────────────────────────┐
│  │ Control: EDM-01                 ×   │
│  │ Title: Org AI Governance        ... │
│  │ Domain: Governance              ▼   │
│  │                                      │
│  │ Status:                              │
│  │ [COMPLIANT ▼]                       │
│  │                                      │
│  │ or [NOT_TESTED ▼] or ...            │
│  └─────────────────────────────────────┘
│                                         │
│  ┌─────────────────────────────────────┐
│  │ Control: DSS-04                 ×   │
│  │ Title: Data Security            ... │
│  │ Domain: Data & Security         ▼   │
│  │                                      │
│  │ Status:                              │
│  │ [NON_COMPLIANT ▼]                   │
│  └─────────────────────────────────────┘
│                                         │
│  [RUN EVALUATION]     [BACK]            │
│                                         │
└─────────────────────────────────────────┘
```

**Elements**:

- Header: Project name + org_profile summary (read-only)
- Instructions: Brief copy explaining what user should do
- Control cards (one card per control — all 9 v1.1 registry controls displayed):
  - Canonical Control ID as returned by engine (e.g., a display label may be shown, but the ID used in the payload must match the engine contract exactly)
  - Control title
  - Domain (e.g., "Governance", "Data & Security")
  - Status dropdown: {COMPLIANT, NON_COMPLIANT, PARTIAL, NOT_TESTED} — required, no default
  - (Future: optional notes field; NOT in MVP)
- `[RUN EVALUATION]` button (primary) — disabled until all statuses set
- `[BACK]` button (secondary) — returns to Project Setup

**Data Flow**:

- Input: org_profile from Screen 2. No engine call is made before this form is displayed.
- Control list source: All 9 v1.1 registry controls are presented. Control IDs and metadata come from the engine's structured response (after submission) or from a lightweight registry read — never from hardcoded frontend data.
- Validation (client-side, before submission):
  - Each control status must be set (required)
  - Status values: {COMPLIANT, NON_COMPLIANT, PARTIAL, NOT_TESTED} only
- Validation (engine-side, on submission):
  - org_profile validated by engine before evaluation
  - Evidence control IDs and statuses validated by engine
- Output (on submission):

  ```json
  {
    "org_profile": { ... },
    "evidence": {
      "EDM-01": {
        "status": "COMPLIANT"
      },
      "DSS-04": {
        "status": "NON_COMPLIANT"
      },
      ...
    }
  }
  ```

- Next step: Call engine's evaluate-compliance with evidence + org_profile

**Transitions**:

- All statuses set, click "RUN EVALUATION" → FastAPI adapter call → Screen 4: Results Dashboard (on success)
- Click "BACK" → Screen 2: Project Setup (no confirmation needed; no state is lost from engine perspective)
- Adapter/engine returns evaluation error → Display error banner on Screen 3; stay on Screen 3 for correction

**Error Handling**:

```
If engine rejects org_profile on submit (validation error):
  Error message: "Could not evaluate: [engine error message]"
  [BACK TO SETUP] button

If user tries to submit with missing statuses:
  Error message: "All controls require a status. [button to scroll to first empty]"

If engine evaluation fails (evidence error, unknown control ID):
  Error message: "Evaluation failed: [engine error]. Please review your responses."
  [BACK TO EDIT] button
```

---

### Screen 4: Results Dashboard

**Purpose**: Display overall compliance score and domain breakdown.

**Layout**:

```
┌──────────────────────────────────────┐
│  Assessment Results                  │
│  Project: [Project Name]             │
├──────────────────────────────────────┤
│                                      │
│  Overall Compliance Score:           │
│  ┌──────────────┐                    │
│  │    66.7%     │  Partial           │
│  │   (6 of 9)   │  Compliance        │
│  └──────────────┘                    │
│                                      │
│  Domain Breakdown:                   │
│  ┌──────────────────────────────────┐
│  │ Governance (EDM Domain)          │
│  │ Compliant: 3 | Non: 0 | Partial: 0 │
│  │ [VIEW DETAILS →]                 │
│  └──────────────────────────────────┘
│                                      │
│  ┌──────────────────────────────────┐
│  │ Data & Security (DSS Domain)     │
│  │ Compliant: 3 | Non: 2 | Partial: 1 │
│  │ [VIEW DETAILS →]                 │
│  └──────────────────────────────────┘
│                                      │
│  Control Status Summary:             │
│  Compliant: 6                        │
│  Non-Compliant: 2                    │
│  Partial: 1                          │
│  Not Tested: 0                       │
│                                      │
│  [NEW ASSESSMENT]  [VIEW DETAILS]    │
│                                      │
└──────────────────────────────────────┘
```

**Elements**:

- Header: Project name
- Overall score card: Percentage + summary label
- Domain cards (one per domain in applicable controls):
  - Domain name
  - Counts: {Compliant, Non-Compliant, Partial, Not Tested}
  - "[VIEW DETAILS →]" link (routes to Screen 5 filtered by domain)
- Control status summary (totals across all controls)
- `[NEW ASSESSMENT]` button (primary) — back to Home
- `[VIEW DETAILS]` button (primary) — routes to Screen 5 (all controls)

**Data Flow**:

- Input: ComplianceReport JSON from engine (contains summary + domain breakdown + control statuses)
- Parsing:
  - Extract overall_score.compliance_percentage
  - Extract domain_breakdown[] for each domain
  - Extract controls[] for status counts
- Output: None (display only)
- No further engine calls needed

**Transitions**:

- Click "[VIEW DETAILS →]" (on domain card) → Screen 5: Control Detail View (filtered by domain)
- Click "[VIEW DETAILS]" (button) → Screen 5: Control Detail View (all controls)
- Click "[NEW ASSESSMENT]" → Screen 1: Home

---

### Screen 5: Control Detail View

**Purpose**: Show full detail of specific control and its evaluation outcome.

**Layout**:

```
┌─────────────────────────────────────────────┐
│  Control Details                            │
│  ← Back to Results                          │
├─────────────────────────────────────────────┤
│                                             │
│  Control ID:              EDM-01            │
│  Title:                   Organizational    │
│                           AI Governance     │
│  Domain:                  Governance (EDM)  │
│                                             │
│  ─────────────────────────────────────────  │
│  Atomic Objective:                          │
│  The organization establishes documented   │
│  practices, roles, and accountabilities    │
│  for the governance of AI systems.         │
│                                             │
│  ─────────────────────────────────────────  │
│  Authorities:                               │
│  • ISO 27001:2022 Annex A.5.1              │
│  • NIST SSDF PO.1.1                        │
│  • OWASP AI Security Framework              │
│  • COBIT DSS03                              │
│                                             │
│  ─────────────────────────────────────────  │
│  Assessment Outcome:                        │
│                                             │
│  Your Status:     COMPLIANT   ●            │
│                                             │
│  Why It Matters:                            │
│  This control establishes the foundation   │
│  for all downstream AI governance. Without │
│  clear organizational commitment and       │
│  defined roles, subsequent controls fail.  │
│                                             │
│  Evidence Expectation:                      │
│  • Documented AI governance charter        │
│  • Defined roles: AI Lead, Security Lead   │
│  • Annual governance reviews               │
│  • Clear escalation path for disputes      │
│                                             │
│  ─────────────────────────────────────────  │
│  Resources:                                 │
│  [📄 Framework Docs] [🔗 References]       │
│                                             │
│  ← [PREVIOUS CONTROL]  [NEXT CONTROL] →    │
│                                             │
└─────────────────────────────────────────────┘
```

**Elements**:

- Header: "Back to Results" link
- Control metadata (ID, title, domain) — read-only
- Atomic objective: Full text explanation of control goal
- Authorities: List of mapped standards (ISO/NIST/OWASP/COBIT)
- Assessment outcome:
  - Your status badge (color-coded: green=COMPLIANT, red=NON_COMPLIANT, yellow=PARTIAL, gray=NOT_TESTED)
- "Why It Matters": Business/governance importance of this control
- Evidence expectation: What evidence would satisfy this control (user-submitted)
- Resources: Links to framework docs (optional, can be "Learn More" link)
- Navigation: "[PREVIOUS CONTROL]" / "[NEXT CONTROL]" buttons

**Data Flow**:

- Input: ComplianceReport JSON from the `POST /evaluate` adapter response + control ID from user click
- Source of metadata: All control metadata displayed on this screen (title, domain, atomic objective, authorities, why it matters, evidence expectation) must come from the adapter response. The engine must return this data as part of the ComplianceReport or a supplementary field. The UI must not read the registry directly or maintain hardcoded copies of any control property.
- If the adapter response does not yet include full control metadata (e.g., atomic objective), the adapter must be extended to include it before Screen 5 is built — not the frontend.
- Construction from response:

  ```json
  {
    "control_id": "EDM-01",
    "title": "Organizational AI Governance",
    "domain": "Governance",
    "atomic_objective": "[from adapter response]",
    "authorities": "[from adapter response]",
    "assessed_status": "COMPLIANT",
    "applicable": true,
    "why_it_matters": "[from adapter response]",
    "evidence_expectation": "[from adapter response]"
  }
  ```

- Canonical Control ID rule: The `control_id` field displayed and used in all UI logic must exactly match the ID returned by the engine. If a shorter display label is used in the UI for readability, it is a display alias only. The canonical ID from the engine is always the operative identifier for payload construction, linking, and navigation.

- Output: None (display only)

**Transitions**:

- Click "← Back to Results" → Screen 4: Results Dashboard
- Click "[NEXT CONTROL] →" → Screen 5: Next control in list
- Click "[← PREVIOUS CONTROL]" → Screen 5: Previous control
- Click "[Resources]" → External link (or modal, TBD later)

---

## 4. Data Flow Architecture

### UI ↔ Engine Contract

**The UI never computes anything. The engine is the sole source of truth.**

**MVP Integration Model**: The UI relies on **one required engine call** only: `evaluate-compliance`. A separate applicability pre-filter call is not required for MVP and may be introduced in a later release once an explicit API boundary is defined.

---

#### Engine Call (Required): evaluate-compliance

This is the single required engine integration for MVP. It accepts `org_profile` and `evidence`, validates both, determines applicable controls, scores compliance, and returns a full report.

```
Input:
  org_profile = {
    environment: "Cloud|SaaS|On-Prem|Hybrid",
    ai_usage: true/false,
    apis_exposed: true/false
  }
  evidence = {
    "EDM-01": { "status": "COMPLIANT" },
    "EDM-02": { "status": "NON_COMPLIANT" },
    ...
  }

Process:
  UI sends to engine: evaluate-compliance --org-profile <json> --evidence <json>

Output:
  ComplianceReport = {
    engine_version: "1.1.0",
    registry_version: "1.1",
    summary: {
      compliance_percentage: 66.7,
      total_controls: 9,
      compliant_count: 6,
      non_compliant_count: 2,
      partial_count: 1,
      not_tested_count: 0
    },
    domain_breakdown: [
      {
        domain: "Governance",
        compliant: 3,
        non_compliant: 0,
        partial: 0,
        not_tested: 0
      },
      ...
    ],
    controls: [
      {
        control_id: "EDM-01",
        status: "COMPLIANT",
        applicable: true,
        ...
      },
      ...
    ]
  }

Usage:
  UI renders Screens 4 & 5 with this report.
  applicable_controls list for Screen 3 is derived from controls[] where applicable=true.
```

**Note on Screen 3 (Evidence Form)**: For MVP, the UI presents all v1.1 registry controls (9 total) for user status input. The v1.1 registry is small enough that pre-filtering is not necessary. Controls with `applicable: false` in the results are clearly labeled. No separate call is required before the user submits their evidence.

---

#### Engine Call (Optional, Deferred to v1.2+): get-applicable-controls

A standalone call to retrieve only applicable controls before the user fills the evidence form is not present in v1.1 as a formal API boundary. If future UX testing shows that presenting all controls is confusing, this call can be introduced as a separate endpoint in v1.2.

```
Status: NOT IMPLEMENTED in v1.1
When available: UI may call this before rendering Screen 3
to show only applicable controls to the user
```

### State Management

**UI maintains three states during the flow:**

1. **Project Setup State**

   ```json
   {
     "project_name": "string",
     "org_profile": { "environment": "...", "ai_usage": bool, "apis_exposed": bool }
   }
   ```

2. **Evidence Form State**

   ```json
   {
     "project_name": "string",
     "org_profile": { ... },
     "applicable_controls": [ ... ],
     "evidence_input": { "EDM-01": { "status": "COMPLIANT" }, ... }
   }
   ```

3. **Results State**

   ```json
   {
     "project_name": "string",
     "org_profile": { ... },
     "compliance_report": { [full engine report] }
   }
   ```

**No persistence. No database. Each session is independent.**

---

### Non-Duplication Rule (Mandatory)

**The UI must not own or duplicate any control metadata.**

Control metadata includes:

- Control titles
- Atomic objectives
- Authority references (ISO / NIST / OWASP / COBIT)
- Domain labels
- Evidence expectations
- "Why it matters" descriptions

**All of the above must originate from the engine's response or a registry adapter. Never from frontend static files.**

Violation consequences:

| Risk                      | Impact                                      |
| ------------------------- | ------------------------------------------- |
| Registry is updated       | Frontend data becomes stale silently        |
| Control title changes     | UI shows wrong title, docs show correct one |
| Authority mapping changes | UI references wrong standard version        |
| Domain label changes      | UI and engine reports disagree              |

**Rule**: If a property exists in the registry, it must be served to the UI via the engine or adapter. The UI is a rendering layer, not a data store.

**Enforcement during MVP build**: Do not copy control data into any `.json`, `.ts`, `.tsx`, or `.md` file inside `governance-docs-site/src/`. If a control property is needed in the UI, it must come from an API response.

---

## 5. Component Library (Sketch Only)

Not visual design yet; just logical structure.

### Reusable Components

- **Card**: Container for grouped content (control card, domain card)
- **Radio Group**: For environment selection, yes/no questions
- **Dropdown / Select**: For control status (COMPLIANT, etc.)
- **Button**: Primary (CTA), Secondary (back/cancel), Link (navigation)
- **Badge**: Status indicator (color-coded)
- **Stack**: Vertical/horizontal layout (not a real component, just ordering)
- **TextField**: Text input for project name
- **ErrorBanner**: Red banner for validation errors
- **LoadingSpinner**: For "evaluating..." states
- **SimpleTable**: For status summary (future, not needed for MVP)

---

## 6. Error Handling & Empty States

### Error Scenarios

All errors below are tied to the single `POST /evaluate` call or to client-side form validation. There is no pre-call for applicable controls in MVP; therefore no errors related to a pre-call exist.

| Scenario                                                 | Error Message                                                                                               | User Action                |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------- |
| Missing org_profile field (client-side)                  | "Please select an environment (Cloud, SaaS, On-Prem, or Hybrid)"                                            | Fill form, retry           |
| Invalid environment value (client-side)                  | "Invalid environment. Choose Cloud, SaaS, On-Prem, or Hybrid."                                              | Select valid option        |
| Missing status on one or more controls (client-side)     | "All controls require a status before submission."                                                          | Complete form, retry       |
| FastAPI adapter unreachable                              | "Could not connect to evaluation service. Please try again."                                                | [RETRY] button             |
| Engine rejects org_profile (server-side)                 | "Evaluation failed: [engine error message]. Review your project setup."                                     | [BACK TO SETUP]            |
| Engine rejects evidence (bad status value)               | "Evaluation failed: invalid status for [control_id]. Use COMPLIANT, NON_COMPLIANT, PARTIAL, or NOT_TESTED." | [BACK TO EDIT] on Screen 3 |
| Evaluation succeeds but returns zero applicable controls | "Your configuration has no applicable controls in v1.1. Review your project setup."                         | [BACK TO SETUP]            |
| Network / timeout error                                  | "Connection error. Please try again."                                                                       | [RETRY] button             |

### Empty States

| State                                          | Condition                                                          | Display                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Home — no assessment yet                       | First visit, no assessment started                                 | Hero + "START ASSESSMENT"                                          |
| Loading evaluation                             | POST /evaluate request in flight                                   | Spinner + "Evaluating your project..." (button disabled)           |
| Evaluation complete — zero applicable controls | Engine returns 0 applicable controls for the submitted org_profile | "No controls apply to your configuration in v1.1. [BACK TO SETUP]" |
| Results loaded — all controls NOT_TESTED       | All 9 statuses were NOT_TESTED                                     | Score = 0%, domain breakdown shows all as "Not Tested"             |

---

## 7. Navigation Map

```
                    ┌─────────────────┐
                    │  Screen 1: Home │ (entry point)
                    └────────┬────────┘
                             │ "START ASSESSMENT"
                             ↓
                    ┌─────────────────────────┐
                    │ Screen 2: Project Setup │
                    └────────┬────────────────┘
                             │ "GENERATE ASSESSMENT"
                             ↓
                    ┌─────────────────────────┐
                    │ Screen 3: Evidence Form │
                    └────────┬────────────────┘
                             │ "RUN EVALUATION"
                             ↓
                    ┌─────────────────────────┐
                    │ Screen 4: Results       │
                    └────────┬────────────────┘
                             │ "VIEW DETAILS" or domain card
                             ↓
                    ┌─────────────────────────┐
                    │ Screen 5: Control       │ (detail view)
                    └─────────┬───────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │ NEXT/PREV controls │                    │
         ↓                    ↓                    ↓
    Screen 5         Screen 5              Screen 4 (back)
    (different       (different
     control)        control)

Shortcuts:
- [CANCEL] on Screen 2 → Screen 1
- [BACK] on Screen 3 → Screen 2
- "Back to Results" on Screen 5 → Screen 4
- "← Back to Results" on Screen 4 → Screen 1
- [NEW ASSESSMENT] on Screen 4 → Screen 1
```

---

## 8. Out of Scope (MVP Constraints)

**These features are explicitly deferred to v1.2+:**

- ❌ User login / authentication
- ❌ Multi-user projects
- ❌ Project persistence (save / reload assessments)
- ❌ Database backend
- ❌ PDF export / report generation
- ❌ Email notifications
- ❌ Remediation guidance engine
- ❌ Advanced charting (pie charts, trend graphs)
- ❌ Admin panel / user management
- ❌ Dark mode / theming
- ❌ Internationalization (i18n)
- ❌ Mobile responsiveness (desktop first)
- ❌ Notes/comments on controls
- ❌ Project history / versioning
- ❌ Bulk import/export
- ❌ API for external integrations
- ❌ Advanced filtering / search on controls

**Rationale**: MVP must ship in <4 weeks. These features block speed and are not needed to validate the core user journey.

---

## 9. Success Criteria for MVP

### Functional Requirements (Must Have)

- [ ] User can enter org_profile inputs (name, environment, AI usage, API exposure)
- [ ] UI validates org_profile client-side before submitting to adapter
- [ ] UI renders all 9 v1.1 registry controls for evidence status entry
- [ ] User can set status for each control from the allowed set
- [ ] UI submits one `POST /evaluate` request with org_profile + evidence
- [ ] UI correctly receives and parses ComplianceReport JSON from adapter
- [ ] UI displays compliance score, domain breakdown, and status counts
- [ ] User can navigate to control detail view from results
- [ ] Control detail view renders all metadata returned by engine adapter response
- [ ] User can navigate between controls (prev/next)
- [ ] User can start a new assessment from results screen

### Quality Requirements (Must Have)

- [ ] All error messages are clear and actionable
- [ ] No console errors or unhandled exceptions
- [ ] All forms validate before engine calls
- [ ] Engine API contract respected (inputs/outputs match schema)
- [ ] Page load time < 2 seconds
- [ ] Assessment flow takes < 5 minutes end-to-end

### UX Requirements (Must Have)

- [ ] First-time user can complete assessment without docs
- [ ] No more than 3 clicks to reach any screen from home
- [ ] Status bar or breadcrumb shows current position
- [ ] Error messages appear within 1 second
- [ ] Loading states are visible (spinners, disabled buttons)

---

## 10. Implementation Ordering (Phase-In Plan)

### Phase 1: Skeleton & API Contract (Week 1)

- [ ] Define React component structure (Layout, Router, hooks)
- [ ] Create dummy screens (5 screens, no real data)
- [ ] Mock engine API calls (fake JSON responses)
- [ ] Establish data flow between screens
- [ ] Test navigation happy path

**Output**: Runnable skeleton with fake data; navigation works end-to-end.

### Phase 2: Real Engine Integration (Week 2)

- [ ] Implement and deploy thin FastAPI adapter (`POST /evaluate` endpoint)
- [ ] Connect Docusaurus screens to live FastAPI adapter
- [ ] Implement org_profile client-side validation (matching engine contract)
- [ ] Implement evidence submission and display of ComplianceReport response
- [ ] Handle adapter/engine errors gracefully (map error codes to user messages)
- [ ] Test happy path with real engine (valid org_profile + evidence)

**Output**: Real UI connected to real engine via adapter; happy path produces real results.

### Phase 3: Control Detail & Polish (Week 3)

- [ ] Implement Screen 5 (Control Detail View) using metadata from adapter response
- [ ] Implement prev/next control navigation (index-based, no additional API call)
- [ ] Add all loading states, empty states, and error states per Section 6
- [ ] Add client-side form validation messages (inline, not banner)
- [ ] Polish Docusaurus page styling (CSS modules, basic layout only)

**Output**: All 5 screens functional; all states covered; no hardcoded registry data.

### Phase 4: Quality & Deployment (Week 4)

- [ ] Full manual testing (happy + error paths)
- [ ] Accessibility audit (WCAG basics)
- [ ] Performance audit
- [ ] Documentation (README, setup guide)
- [ ] Deploy to test environment

**Output**: Shippable MVP; ready for user testing.

---

## 11. Technology Stack Decision

**Principle**: Leverage what already exists. Do not introduce parallel structures.

### Approved Stack for MVP: Docusaurus + React Components

`governance-docs-site` is already built on Docusaurus, which is a React-based framework. The assessment UI will be implemented as React pages and components inside this existing site.

**Rationale**:

- Single build system (no duplication of webpack/bundler config)
- Single deployment pipeline (no separate deployment target)
- Single design token space (no divergent styling systems)
- UI and documentation remain co-located (one portal, one address)
- React is already available as a dependency — no new runtime added

**Implementation Method**:

Use Docusaurus [custom pages](https://docusaurus.io/docs/creating-pages) for the 5 assessment screens. Each screen is a React component under `governance-docs-site/src/pages/` or as an MDX page with embedded React components.

**State management**: React `useState` and `useContext` hooks only. No Redux, no external state libraries for MVP.

**Routing**: Docusaurus built-in routing (file-system based). No need for React Router as a separate dependency.

```
governance-docs-site/
  src/
    pages/
      assess/
        index.tsx         ← Screen 1: Home / Overview
        setup.tsx         ← Screen 2: Project Setup
        evidence.tsx      ← Screen 3: Evidence Form
        results.tsx       ← Screen 4: Results Dashboard
        control.tsx       ← Screen 5: Control Detail View
    components/
      assessment/
        OrgProfileForm.tsx
        EvidenceForm.tsx
        ComplianceReport.tsx
        ControlCard.tsx
```

### Not Approved for MVP: Standalone React + Vite App

Creating a separate Vite application at this stage would introduce:

- A second build system alongside Docusaurus
- A second frontend structure and component tree
- Duplicate design tokens and styling concerns
- A second deployment pipeline and hosting target
- Unnecessary separation between UI and documentation portal

This approach is valid for a future standalone product version, not for MVP within the current three-repository structure.

### Not Applicable: Vue

Not applicable given that the existing site is React-based (Docusaurus). Introducing a second frontend framework creates unresolvable conflicts.

### Backend

**A thin FastAPI adapter is required for MVP runtime access to the engine.**

The Docusaurus frontend (running in the browser) cannot invoke CLI commands or import Python packages directly. A lightweight Python HTTP adapter is the correct integration boundary between the React UI and the `eatgf-engine` package.

**Clarification of terms**:

| Statement             | Meaning                                                             |
| --------------------- | ------------------------------------------------------------------- |
| "No business backend" | No user database, no authentication layer, no session store, no ORM |
| "Adapter required"    | A single Python file serving one endpoint: `POST /evaluate`         |

These two statements are compatible. The adapter has no business logic of its own. It receives the UI payload, passes it to the engine, and returns the result.

**Approved adapter design for MVP**:

```python
# adapter/main.py — thin FastAPI wrapper around eatgf-engine
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from eatgf_engine.cli.main import run_evaluation  # engine entrypoint

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"])

@app.post("/evaluate")
def evaluate(payload: dict):
    return run_evaluation(payload["org_profile"], payload["evidence"])
```

**Deployment**: Co-deployed with Docusaurus site. Not a separate product or service.
**Scope**: Single endpoint only. No admin routes, no auth, no logging infrastructure for MVP.

---

## 12. Repository Responsibilities

The three-repository structure of EATGF is a deliberate architectural boundary. This boundary must be preserved throughout and after UI development. No repository may absorb responsibilities from another.

### eatgf-framework

**Role**: Intellectual and policy authority.

**Contains**: Framework layers (00–08), whitepaper, annex, control definitions (conceptual), governance policy documents.

**Does not contain**:

- UI code of any kind
- Runtime logic
- Engine evaluation rules
- Docusaurus configuration

**Constraint**: Changes to this repository affect the governance model. No UI implementation task should require modifying this repository.

---

### eatgf-engine

**Role**: Computation and evaluation authority.

**Contains**: Registry v1.1 (9 controls, frozen), evaluator, compliance report builder, org_profile validator, CLI interface, Python package (`pyproject.toml`).

**Does not contain**:

- Documentation portal pages
- Docusaurus configuration
- UI components
- Styling

**Forthcoming (within engine boundary)**:

- REST adapter (thin FastAPI wrapper) for UI integration
- Any future applicability API endpoint

**Constraint**: The engine is the only permitted source of compliance scores, control metadata, and validation outcomes. No other system may replicate or override this logic.

---

### governance-docs-site

**Role**: User-facing portal and product experience layer.

**Contains**: Documentation (Getting Started, Evidence Guide, etc.), Docusaurus portal configuration, assessment UI pages and components, onboarding flows, template downloads.

**Does not contain**:

- Governance policy documents (those belong in eatgf-framework)
- Evaluation logic (that belongs in eatgf-engine)
- Hardcoded control registry copies

**Constraint**: This repository is the only permitted location for UI code, Docusaurus pages, React components, and frontend assets. The MVP UI is built exclusively here.

---

### Boundary Summary

| Concern              | eatgf-framework |   eatgf-engine   | governance-docs-site |
| -------------------- | :-------------: | :--------------: | :------------------: |
| Governance policy    |      Owner      |     Consumer     |      Reference       |
| Control registry     |     Defines     |     Executes     |       Renders        |
| Evaluation logic     |      None       |      Owner       |       Consumer       |
| UI components        |      None       |       None       |        Owner         |
| REST API wrapper     |      None       |      Owner       |       Consumer       |
| Documentation portal |      None       |       None       |        Owner         |
| Build pipeline       |      None       | Python packaging |   Docusaurus/Node    |

**Rule**: Any change that crosses a repository boundary requires explicit justification. UI tasks must not require engine code changes unless a documented API gap exists.

---

## 13. Document Sign-Off & Next Steps

### What This Document Defines

✅ **Information Architecture** (5 screens, all elements)
✅ **Primary User Journey** (start → results)
✅ **Data Flow** (org_profile → engine → report)
✅ **Error Handling** (validation, edge cases)
✅ **Constraints** (MVP scope, out-of-scope features)
✅ **Implementation Ordering** (4-week plan)

### What This Document Does NOT Define

❌ Visual Design (colors, fonts, spacing, layout)
❌ Wireframe mockups (Figma/Sketch)
❌ Component CSS (styled-components, Tailwind, etc.)
❌ Detailed API spec (REST vs CLI wrapper details)
❌ Database schema (none for MVP)

---

## Next Steps

1. **Design Phase** (Design Team):
   - Review this IA document
   - Create wireframe mockups (Figma)
   - Define visual design system (typography, colors, spacing)
   - User test wireframes with target users

2. **Development Setup** (Engineering):
   - Confirm tech stack: Docusaurus React pages inside `governance-docs-site/src/pages/assess/`
   - Set up component scaffold under `governance-docs-site/src/components/assessment/`
   - Decide and implement engine integration method (FastAPI REST wrapper recommended)
   - Define and document the REST endpoint contract (`POST /evaluate`)

3. **Engineering Phase** (Implementation):
   - Follow 4-week phase-in plan
   - Build screens in order (skeleton → real data → detail → polish)
   - Test with real engine

4. **QA & Deployment** (Final):
   - Full end-to-end testing
   - User acceptance testing (UAT)
   - Deploy to staging
   - Document setup & deployment

---

**Version**: 1.1.2 (Patch — Five consistency corrections applied)
**Last Updated**: March 25, 2026
**Status**: Clean — Ready for Design and Implementation
**Changes from v1.1.1**:

- Happy Path unified: removed pre-call "generate applicable controls"; single POST /evaluate model throughout
- Error and Empty States rewritten: all errors tied to evaluation call only; pre-call error states removed
- Success Criteria updated: removed applicability pre-call requirement; aligned with single-call model
- Phase 2 and Phase 3 tasks corrected: removed "applicability call"; added FastAPI adapter task; corrected metadata source
- Backend contradiction resolved: "No backend needed" replaced with "No business backend; thin FastAPI adapter required"
- Screen 5 Data Flow fixed: registry lookup replaced with adapter response as sole metadata source; canonical ID rule added

**Next Review**: Post-wireframe feedback
