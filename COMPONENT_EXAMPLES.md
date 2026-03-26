# Template Component Examples & Best Practices

## SECTION 01 - This file contains practical examples for each template component

---

## SECTION 02 - Header Variants

### Variant 1: Basic Header (Most commonly used)

```html
<header class="mb-16">
  <nav class="flex text-xs text-slate-400 mb-4 gap-2">
    <span class="hover:text-primary cursor-pointer">EATGF</span>
    <span>/</span>
    <span class="hover:text-primary cursor-pointer">Policy Layer</span>
    <span>/</span>
    <span class="text-on-surface">Git Governance</span>
  </nav>
  <h1
    class="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6"
  >
    Git Governance Policy
  </h1>
  <p class="text-lg text-secondary leading-relaxed max-w-3xl">
    Establishes mandatory git flow protocols, branch protection rules, and
    commit standards for all enterprise codebases.
  </p>
</header>
```

✅ **Good for:** Policy documents, framework guides, architectural standards

---

### Variant 2: Long-Form Introduction

```html
<header class="mb-16">
  <h1
    class="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6"
  >
    Control Architecture Framework
  </h1>
  <div class="space-y-4 max-w-3xl">
    <p class="text-lg text-secondary leading-relaxed">
      The Control Architecture Framework defines how security controls map to
      governance objectives and operational processes.
    </p>
    <p class="text-base text-on-surface-variant leading-relaxed">
      This document serves as the reference for control categorization,
      ownership assignment, and audit compliance verification.
    </p>
  </div>
</header>
```

✅ **Good for:** Complex topics needing multiple intro paragraphs

---

## SECTION 03 - Section Variations

### Variant A: Standard Section (with badge)

```html
<section class="scroll-mt-24" id="principles">
  <div class="flex items-center gap-3 mb-6">
    <span
      class="text-primary-dim font-headline font-bold text-sm
                     tracking-tighter px-3 py-1 bg-primary-container rounded-full"
    >
      SECTION 01
    </span>
    <h2 class="text-3xl font-bold text-on-surface tracking-tight">
      Core Principles
    </h2>
  </div>

  <div class="prose prose-slate max-w-4xl">
    <p class="text-secondary mb-8">
      The following principles guide all governance decisions...
    </p>
  </div>
</section>
```

---

### Variant B: Subsection (without badge number)

```html
<section class="scroll-mt-20" id="specific-requirement">
  <h3 class="text-2xl font-bold text-on-surface tracking-tight mb-4">
    Specific Implementation Requirement
  </h3>

  <div class="prose prose-slate max-w-4xl">
    <p class="text-secondary mb-8">Implementation details...</p>
  </div>
</section>
```

---

## SECTION 04 - Card Component Examples

### Requirements Card - Version A (Basic)

```html
<div class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
  <span
    class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block"
  >
    MANDATORY REQUIREMENTS
  </span>
  <ul class="space-y-3 text-sm text-on-surface-variant">
    <li class="flex gap-2">
      <span class="material-symbols-outlined text-primary text-base"
        >check_circle</span
      >
      <span>All commits must be digitally signed with GPG keys</span>
    </li>
    <li class="flex gap-2">
      <span class="material-symbols-outlined text-primary text-base"
        >check_circle</span
      >
      <span>Commit messages must follow conventional format</span>
    </li>
    <li class="flex gap-2">
      <span class="material-symbols-outlined text-primary text-base"
        >check_circle</span
      >
      <span>Pull requests require minimum 2 approvers before merge</span>
    </li>
  </ul>
</div>
```

---

### Requirements Card - Version B (With sub-bullets)

```html
<div class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
  <span
    class="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block"
  >
    CONTROL OBJECTIVES
  </span>
  <ul class="space-y-4 text-sm text-on-surface-variant">
    <li>
      <div class="flex gap-2 mb-2">
        <span class="material-symbols-outlined text-primary text-base"
          >task_alt</span
        >
        <strong class="text-on-surface">Authentication</strong>
      </div>
      <ul class="pl-8 space-y-1 text-xs">
        <li>• Multi-factor authentication required</li>
        <li>• Session timeout after 30 minutes</li>
        <li>• Audit all access attempts</li>
      </ul>
    </li>
  </ul>
</div>
```

---

### Code Block - Python Example

```html
<div
  class="bg-inverse-surface text-on-primary p-6 rounded-xl font-mono text-sm
            mb-10 overflow-x-auto border-l-4 border-primary"
>
  <div class="flex justify-between items-center mb-4 opacity-50">
    <span class="text-xs font-label">github_branch_protection.py</span>
    <span class="text-[10px] font-label tracking-widest">PYTHON</span>
  </div>
  <code class="block text-blue-200">
    import requests<br />
    <br />
    def enforce_branch_protection(repo, branch):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;"""Enforce required status checks on branch"""<br />
    &nbsp;&nbsp;&nbsp;&nbsp;response = requests.put(<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f"https://api.github.com/repos/{repo}/branches/{branch}/protection",<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json={"required_status_checks":
    {"strict": True}}<br />
    &nbsp;&nbsp;&nbsp;&nbsp;)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;return response.status_code == 200
  </code>
</div>
```

---

### Code Block - JSON/YAML Example

```html
<div
  class="bg-inverse-surface text-on-primary p-6 rounded-xl font-mono text-sm
            mb-10 overflow-x-auto border-l-4 border-primary"
>
  <div class="flex justify-between items-center mb-4 opacity-50">
    <span class="text-xs font-label">control-mapping.yaml</span>
    <span class="text-[10px] font-label tracking-widest">YAML</span>
  </div>
  <code class="block text-blue-200">
    control_id: CO-001<br />
    name: Branch Protection<br />
    iso27001_mapping: A.12.4.1<br />
    nist_framework:<br />
    &nbsp;&nbsp;- PO-2.2<br />
    &nbsp;&nbsp;- CM-3.4<br />
    owner: Platform Engineering<br />
    frequency: Quarterly
  </code>
</div>
```

---

## SECTION 05 - Callout Components

### Info Callout - Implementation Note

```html
<div
  class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary"
>
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">info</span>
    <span
      class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container"
    >
      IMPLEMENTATION NOTE
    </span>
  </div>
  <p class="text-sm text-on-tertiary-container">
    For organizations with legacy CI/CD systems, branch protection can be
    enforced via GitHub app webhooks.
  </p>
</div>
```

---

### Info Callout - Best Practice

```html
<div
  class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary"
>
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">lightbulb</span>
    <span
      class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container"
    >
      BEST PRACTICE
    </span>
  </div>
  <p class="text-sm text-on-tertiary-container">
    Combine branch protection with automated code scanning. Failed security
    checks should block merge automatically.
  </p>
</div>
```

---

### Warning Callout - Compliance Warning

```html
<div class="bg-error-container/10 rounded-xl p-6 border-l-4 border-error">
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-error">warning</span>
    <span class="text-xs font-bold uppercase tracking-wider text-error">
      COMPLIANCE RISK
    </span>
  </div>
  <p class="text-sm text-on-error-container">
    Direct pushes to main/master branch bypass SAST/DAST scanning and violate
    SOC 2 Type II control requirements.
  </p>
</div>
```

---

### Info Callout - Audit Trail

```html
<div
  class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary"
>
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">history</span>
    <span
      class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container"
    >
      AUDIT REQUIREMENT
    </span>
  </div>
  <p class="text-sm text-on-tertiary-container">
    All branch protection changes must be logged to audit systems with user ID,
    timestamp, and change details.
  </p>
</div>
```

---

## SECTION 06 - Grid Layouts

### 3-Column Feature Grid

```html
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
  <!-- Feature 1 -->
  <div class="bg-surface-container-low p-4 rounded-xl text-center">
    <span class="material-symbols-outlined text-primary mb-2 text-3xl block"
      >security</span
    >
    <h4 class="text-sm font-bold block mb-1">Secure by Default</h4>
    <p class="text-xs text-slate-500">
      All repositories inherit strict security controls
    </p>
  </div>

  <!-- Feature 2 -->
  <div class="bg-surface-container-low p-4 rounded-xl text-center">
    <span class="material-symbols-outlined text-primary mb-2 text-3xl block"
      >verified</span
    >
    <h4 class="text-sm font-bold block mb-1">Audit Trail</h4>
    <p class="text-xs text-slate-500">
      Full versioned history of all policy changes
    </p>
  </div>

  <!-- Feature 3 -->
  <div class="bg-surface-container-low p-4 rounded-xl text-center">
    <span class="material-symbols-outlined text-primary mb-2 text-3xl block"
      >trending_up</span
    >
    <h4 class="text-sm font-bold block mb-1">Performance Ready</h4>
    <p class="text-xs text-slate-500">
      Optimized for enterprise-scale deployments
    </p>
  </div>
</div>
```

---

### 2-Column Layout (Content + Flow Diagram)

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
  <!-- Left: Requirements -->
  <div
    class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary"
  >
    <span
      class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block"
    >
      FLOW STEPS
    </span>
    <ol class="space-y-3 text-sm text-on-surface-variant list-decimal pl-5">
      <li>Developer creates feature branch</li>
      <li>Push triggers automated testing</li>
      <li>Tests pass → Pull Request created</li>
      <li>Code review ≥ 2 approvers</li>
      <li>Merge to main branch</li>
      <li>Deploy to production</li>
    </ol>
  </div>

  <!-- Right: Visual/Image -->
  <div class="relative overflow-hidden rounded-xl h-auto md:h-full">
    <img
      class="object-cover w-full h-full grayscale opacity-80"
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
      alt="Git workflow diagram"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
    ></div>
  </div>
</div>
```

---

## SECTION 07 - Advanced Section: Critical Controls

### Container with Multiple Emphasis Levels

```html
<div
  class="bg-surface-container p-6 rounded-xl border-l-4 border-primary mb-10"
>
  <span
    class="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block"
  >
    CRITICAL PROTOCOLS
  </span>

  <div class="space-y-4">
    <!-- Level 1: Main items -->
    <div>
      <div class="flex gap-2 mb-2">
        <span class="material-symbols-outlined text-primary text-base"
          >arrow_right_alt</span
        >
        <strong class="text-on-surface"
          >All merges require protection rules</strong
        >
      </div>
      <p class="text-sm text-on-surface-variant pl-8">
        Enforced at repository and branch level via GitHub API
      </p>
    </div>

    <!-- Level 2: Sub-item -->
    <div>
      <div class="flex gap-2 mb-2">
        <span class="material-symbols-outlined text-primary text-base"
          >arrow_right_alt</span
        >
        <strong class="text-on-surface">Automated scanning before merge</strong>
      </div>
      <p class="text-sm text-on-surface-variant pl-8">
        SAST, DAST, dependency scanning, and secret detection required
      </p>
    </div>
  </div>
</div>
```

---

## SECTION 08 - Full Page Example: Git Governance Policy

```html
<!-- COMPLETE PAGE STRUCTURE -->

<header class="mb-16">
  <nav class="flex text-xs text-slate-400 mb-4 gap-2">
    <span class="hover:text-primary">EATGF</span>
    <span>/</span>
    <span class="hover:text-primary">Policy Layer</span>
    <span>/</span>
    <span class="text-on-surface">Git Governance</span>
  </nav>
  <h1
    class="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6"
  >
    Git Governance Policy
  </h1>
  <p class="text-lg text-secondary leading-relaxed max-w-3xl">
    Establishes mandatory source code management standards, including branch
    protection, commit signing, and access controls for all enterprise
    repositories.
  </p>
</header>

<div class="space-y-24">
  <!-- Section 1: Overview -->
  <section class="scroll-mt-24" id="overview">
    <div class="flex items-center gap-3 mb-6">
      <span
        class="text-primary-dim font-headline font-bold text-sm
                         tracking-tighter px-3 py-1 bg-primary-container rounded-full"
      >
        SECTION 01
      </span>
      <h2 class="text-3xl font-bold text-on-surface tracking-tight">
        Policy Overview & Scope
      </h2>
    </div>
    <div class="prose prose-slate max-w-4xl">
      <p class="text-secondary mb-8">
        This policy applies to all repositories within the enterprise GitHub
        organization...
      </p>
    </div>
  </section>

  <!-- Section 2: Requirements -->
  <section class="scroll-mt-24" id="requirements">
    <div class="flex items-center gap-3 mb-6">
      <span
        class="text-primary-dim font-headline font-bold text-sm
                         tracking-tighter px-3 py-1 bg-primary-container rounded-full"
      >
        SECTION 02
      </span>
      <h2 class="text-3xl font-bold text-on-surface tracking-tight">
        Mandatory Requirements
      </h2>
    </div>
    <div class="prose prose-slate max-w-4xl">
      <p class="text-secondary mb-8">
        All repositories must implement the following controls...
      </p>

      <!-- Requirements Card -->
      <div
        class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary mb-8"
      >
        <span
          class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block"
        >
          BRANCH PROTECTION
        </span>
        <ul class="space-y-3 text-sm text-on-surface-variant">
          <li class="flex gap-2">
            <span class="material-symbols-outlined text-primary"
              >check_circle</span
            >
            <span>Require status checks before merging</span>
          </li>
          <li class="flex gap-2">
            <span class="material-symbols-outlined text-primary"
              >check_circle</span
            >
            <span>Restrict force pushes and deletions</span>
          </li>
        </ul>
      </div>

      <!-- Implementation Code -->
      <div
        class="bg-inverse-surface text-on-primary p-6 rounded-xl font-mono text-sm
                        mb-10 overflow-x-auto border-l-4 border-primary"
      >
        <div class="flex justify-between items-center mb-4 opacity-50">
          <span class="text-xs">enforce_protection.py</span>
          <span class="text-[10px] tracking-widest">PYTHON</span>
        </div>
        <code class="block text-blue-200">
          # Enforce branch protection<br />
          response = requests.put(<br />
          &nbsp;&nbsp;&nbsp;&nbsp;"https://api.github.com/repos/ORG/REPO/branches/main/protection",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;json={<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"required_status_checks":
          {"strict": True},<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"required_pull_request_reviews":
          {"required_approving_review_count": 2}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;}<br />
          )
        </code>
      </div>

      <!-- Warning -->
      <div class="bg-error-container/10 rounded-xl p-6 border-l-4 border-error">
        <div class="flex items-center gap-2 mb-2">
          <span class="material-symbols-outlined text-error">warning</span>
          <span class="text-xs font-bold uppercase tracking-wider text-error">
            CRITICAL REQUIREMENT
          </span>
        </div>
        <p class="text-sm text-on-error-container">
          Direct pushes to production branches violate SOC 2 Type II audit
          requirements.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 3: Implementation -->
  <section class="scroll-mt-24" id="implementation">
    <div class="flex items-center gap-3 mb-6">
      <span
        class="text-primary-dim font-headline font-bold text-sm
                         tracking-tighter px-3 py-1 bg-primary-container rounded-full"
      >
        SECTION 03
      </span>
      <h2 class="text-3xl font-bold text-on-surface tracking-tight">
        Implementation Timeline
      </h2>
    </div>
    <div class="prose prose-slate max-w-4xl">
      <p class="text-secondary mb-8">
        All existing repositories must comply by Q2 2024...
      </p>

      <!-- Timeline Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div class="bg-surface-container-low p-4 rounded-xl text-center">
          <h4 class="text-sm font-bold block mb-1">Phase 1</h4>
          <p class="text-xs text-slate-500">New repositories (Immediate)</p>
        </div>
        <div class="bg-surface-container-low p-4 rounded-xl text-center">
          <h4 class="text-sm font-bold block mb-1">Phase 2</h4>
          <p class="text-xs text-slate-500">Active projects (30 days)</p>
        </div>
        <div class="bg-surface-container-low p-4 rounded-xl text-center">
          <h4 class="text-sm font-bold block mb-1">Phase 3</h4>
          <p class="text-xs text-slate-500">Legacy repos (90 days)</p>
        </div>
      </div>

      <!-- Best Practice -->
      <div
        class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary"
      >
        <div class="flex items-center gap-2 mb-2">
          <span class="material-symbols-outlined text-tertiary">lightbulb</span>
          <span
            class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container"
          >
            BEST PRACTICE
          </span>
        </div>
        <p class="text-sm text-on-tertiary-container">
          Automate branch protection enforcement via GitHub app to ensure
          consistency across all repositories.
        </p>
      </div>
    </div>
  </section>
</div>
```

---

## SECTION 09 - Usage Notes

### ✅ DO's

- Use semantic HTML structure
- Keep code examples under 15 lines
- Always include alt text for images
- Test on mobile, tablet, desktop
- Use consistent icon naming
- Layer sections with `space-y-24`

### ❌ DON'Ts

- Don't use multiple color schemes in one page
- Don't nest more than 2 levels of callouts
- Don't use images larger than 1MB
- Don't change border colors arbitrarily
- Don't mix font families (use Manrope + Inter only)
- Don't create custom CSS in components

---

## SECTION 10 - Copy-Paste Templates

### Blank Section Template

```html
<section class="scroll-mt-24" id="section-id">
  <div class="flex items-center gap-3 mb-6">
    <span
      class="text-primary-dim font-headline font-bold text-sm
                     tracking-tighter px-3 py-1 bg-primary-container rounded-full"
    >
      SECTION 0X
    </span>
    <h2 class="text-3xl font-bold text-on-surface tracking-tight">
      Section Title
    </h2>
  </div>
  <div class="prose prose-slate max-w-4xl">
    <!-- Content goes here -->
  </div>
</section>
```

### Blank Card Template

```html
<div class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
  <span
    class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block"
  >
    CARD LABEL
  </span>
  <!-- Content -->
</div>
```

### Blank Callout Template

```html
<div
  class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary"
>
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">icon_name</span>
    <span
      class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container"
    >
      LABEL
    </span>
  </div>
  <p class="text-sm text-on-tertiary-container">Content text</p>
</div>
```

---

**Updated:** March 26, 2026
**Version:** 2.0
**Authority:** EATGF Documentation Standards
