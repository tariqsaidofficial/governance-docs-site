# GUIDES OVERVIEW PAGE - ARCHITECTURE & IMPLEMENTATION PLAN

**Status:** Ready for Implementation
**Target:** Production Ready
**Language:** English (100%)
**Framework:** Docusaurus 3.9.2 + Tailwind CSS v3

---

## SECTION 01 - Page Purpose

The Guides Overview serves as the **master navigation hub** for all documentation guides within the EATGF Technical Governance Portal. It provides:

- Central entry point for users
- Clear categorization of guides
- Quick navigation to specific topics
- Learning paths by role
- Search and discovery

---

## SECTION 02 - Core Structure

### 1. Page Metadata

```yaml
---
title: Guides Overview
sidebar_label: Guides
slug: /guides
sidebar_position: 2
---
```

### 2. Page Flow

```
Header (Breadcrumb + Title + Description)
    |
    ├── Quick Navigation Grid (4 cards)
    |     [Architecture] [Implementation] [Policies] [Reference]
    |
    ├── Guides by Category (3 columns)
    |     [Setup Guides] [Reference Guides] [Best Practices]
    |
    ├── Learning Paths (Role-Based)
    |     [Designers] [Developers] [Content Writers] [Managers]
    |
    ├── Popular Guides (Trending)
    |     [Most Viewed] [Most Updated] [New Guides]
    |
    └── Quick Links (Footer Section)
          [Support] [Feedback] [Contribute]
```

---

## SECTION 03 - Detailed Section Designs

### Section 1: Page Header

**Structure:**

```html
<header class="mb-16">
  <nav class="flex text-xs text-slate-400 mb-4 gap-2">
    <span>EATGF</span> / <span>Documentation</span> / <span>Guides</span>
  </nav>

  <h1
    class="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6"
  >
    Documentation Guides
  </h1>

  <p class="text-lg text-secondary leading-relaxed max-w-3xl">
    Comprehensive guides organized by role, topic, and use case. Find
    step-by-step instructions, best practices, and reference materials for all
    aspects of the EATGF governance framework.
  </p>
</header>
```

**Styling Details:**

- Breadcrumb: `text-xs text-slate-400`
- Title: `text-4xl md:text-5xl font-extrabold`
- Description: `text-lg text-secondary max-w-3xl`
- Spacing: `mb-16` after header

---

### Section 2: Quick Navigation Grid (4 Cards)

**Purpose:** Immediate access to major guide categories

**Layout:** 1 column (mobile) → 2 columns (md) → 4 columns (lg)

**Card Template:**

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
  <a
    href="/guides/architecture"
    class="bg-surface-container-low p-6 rounded-xl
            border border-primary/20 hover:border-primary
            transition-all group"
  >
    <div class="flex items-start justify-between mb-4">
      <span class="material-symbols-outlined text-primary text-3xl">
        architecture
      </span>
      <span class="text-xs bg-primary-container text-primary px-2 py-1 rounded">
        10 guides
      </span>
    </div>

    <h3 class="text-lg font-bold text-on-surface mb-2 group-hover:text-primary">
      Architecture Guides
    </h3>

    <p class="text-sm text-on-surface-variant">
      System design, framework structure, and technical architecture overview.
    </p>
  </a>

  <!-- Repeat for 3 more cards -->
</div>
```

**Quick Nav Cards:**

1. **Architecture Guides** - System design and structure
2. **Implementation Guides** - Step-by-step setup
3. **Policy Guides** - Governance and compliance
4. **Reference Guides** - Technical specifications

---

### Section 3: Guides by Category

**Purpose:** Organized listing of all available guides

**Layout:** 3-column grid

**Section Header:**

```html
<section class="scroll-mt-24 mb-24" id="by-category">
  <div class="flex items-center gap-3 mb-6">
    <span
      class="text-primary-dim font-headline font-bold text-sm
                 tracking-tighter px-3 py-1 bg-primary-container rounded-full"
    >
      SECTION 02
    </span>
    <h2 class="text-3xl font-bold text-on-surface tracking-tight">
      Guides by Category
    </h2>
  </div>
</section>
```

**Category Cards (3-Column Grid):**

Each category contains 5-7 guide links:

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Category 1: Getting Started -->
  <div class="bg-surface-container-low p-6 rounded-xl">
    <div class="flex items-center gap-2 mb-4">
      <span class="material-symbols-outlined text-primary">lightning_bolt</span>
      <h3 class="text-lg font-bold text-on-surface">Getting Started</h3>
    </div>

    <ul class="space-y-2">
      <li>
        <a
          href="/guides/quick-start"
          class="text-sm text-primary hover:underline"
        >
          → Quick Start Guide
        </a>
      </li>
      <li>
        <a href="/guides/setup" class="text-sm text-primary hover:underline">
          → Initial Setup Guide
        </a>
      </li>
      <li>
        <a
          href="/guides/first-deployment"
          class="text-sm text-primary hover:underline"
        >
          → First Deployment Guide
        </a>
      </li>
      <li>
        <a
          href="/guides/troubleshooting"
          class="text-sm text-primary hover:underline"
        >
          → Troubleshooting Common Issues
        </a>
      </li>
    </ul>
  </div>

  <!-- Category 2: Configuration -->
  <!-- Category 3: Maintenance -->
  <!-- ... -->
</div>
```

**Categories to Include:**

1. **Getting Started** - Quick start, setup, first deployment
2. **Configuration** - Custom settings, integrations
3. **Maintenance** - Updates, backup, recovery
4. **Security** - Access control, compliance
5. **Advanced Topics** - Custom workflows, automation
6. **Troubleshooting** - Common issues, debugging
7. **Integration** - Third-party tools, APIs

---

### Section 4: Learning Paths by Role

**Purpose:** Help users find guides relevant to their role

**Layout:** 4 cards with different roles

**Card Structure:**

```html
<section class="scroll-mt-24 mb-24" id="by-role">
  <div class="flex items-center gap-3 mb-6">
    <span
      class="text-primary-dim font-headline font-bold text-sm
                 tracking-tighter px-3 py-1 bg-primary-container rounded-full"
    >
      SECTION 03
    </span>
    <h2 class="text-3xl font-bold text-on-surface tracking-tight">
      Learning Paths by Role
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Designer Path -->
    <a
      href="/guides/path-designer"
      class="bg-primary-container/30 p-6 rounded-xl
              border-2 border-primary hover:shadow-lg transition"
    >
      <span class="material-symbols-outlined text-primary text-3xl mb-3 block">
        palette
      </span>
      <h3 class="font-bold text-on-surface mb-2">For Designers</h3>
      <p class="text-sm text-on-surface-variant mb-4">
        Design system, component library, visual standards
      </p>
      <span class="text-xs font-semibold text-primary">5 guides →</span>
    </a>

    <!-- Developer Path -->
    <!-- Product Manager Path -->
    <!-- Content Writer Path -->
  </div>
</section>
```

**Roles to Include:**

1. **For Designers** - Design system, components, visual specs
2. **For Developers** - Implementation, coding, API reference
3. **For Managers** - Planning, strategy, governance
4. **For Content Writers** - Content structure, templates, style guide

---

### Section 5: Popular Guides

**Purpose:** Highlight most-viewed and recently updated content

**Layout:** Carousel or 3-column grid

```html
<section class="scroll-mt-24 mb-24" id="popular">
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-center gap-3">
      <span
        class="text-primary-dim font-headline font-bold text-sm
                   tracking-tighter px-3 py-1 bg-primary-container rounded-full"
      >
        SECTION 04
      </span>
      <h2 class="text-3xl font-bold text-on-surface tracking-tight">
        Popular & Recent Guides
      </h2>
    </div>
    <a
      href="/guides"
      class="text-sm text-primary font-semibold hover:underline"
    >
      View All →
    </a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Guide Card (Most Viewed) -->
    <div
      class="bg-surface-container-low p-6 rounded-xl
                border-l-4 border-primary hover:shadow-lg transition"
    >
      <div class="flex items-start justify-between mb-3">
        <span
          class="text-xs font-semibold text-primary
                     bg-primary-container/50 px-2 py-1 rounded"
        >
          MOST VIEWED
        </span>
        <span class="material-symbols-outlined text-slate-400 text-sm">
          trending_up
        </span>
      </div>

      <h3 class="text-lg font-bold text-on-surface mb-2">
        <a href="/guides/git-governance" class="hover:text-primary">
          Git Governance Policy
        </a>
      </h3>

      <p class="text-sm text-on-surface-variant mb-4">
        Comprehensive guide to branch protection, commit standards, and source
        code management policies.
      </p>

      <div class="flex items-center justify-between text-xs text-slate-500">
        <span>👁️ 2.4K views</span>
        <span>15 min read</span>
      </div>
    </div>

    <!-- More cards -->
  </div>
</section>
```

---

### Section 6: Support & CTA Section

**Purpose:** Engage users, encourage contribution

```html
<section class="scroll-mt-24 mb-12" id="support">
  <!-- Top Callout -->
  <div
    class="bg-primary-container/20 rounded-xl p-8 mb-6 border-l-4 border-primary"
  >
    <div class="flex items-start gap-4">
      <span class="material-symbols-outlined text-primary text-3xl mt-1">
        help_center
      </span>
      <div>
        <h3 class="text-lg font-bold text-on-surface mb-2">
          Can't Find What You're Looking For?
        </h3>
        <p class="text-sm text-on-surface-variant mb-4">
          Browse our full documentation, check the FAQ, or contact the support
          team.
        </p>
        <div class="flex gap-3">
          <a
            href="/docs"
            class="text-sm font-semibold text-primary hover:underline"
          >
            Full Docs →
          </a>
          <a
            href="/faq"
            class="text-sm font-semibold text-primary hover:underline"
          >
            FAQ →
          </a>
          <a
            href="/support"
            class="text-sm font-semibold text-primary hover:underline"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Contribution Callout -->
  <div
    class="bg-surface-container-low rounded-xl p-6 border-l-4 border-tertiary"
  >
    <div class="flex items-center gap-2 mb-2">
      <span class="material-symbols-outlined text-tertiary">lightbulb</span>
      <span
        class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container"
      >
        CONTRIBUTE
      </span>
    </div>
    <p class="text-sm text-on-tertiary-container">
      Have a guide idea? Found an issue? We'd love to hear from you.
      <a href="/contribute" class="font-semibold underline"
        >Contribute today →</a
      >
    </p>
  </div>
</section>
```

---

## SECTION 04 - Content Mapping

### Guides to Include

**Getting Started Category:**

- [ ] Quick Start Guide
- [ ] Initial Setup
- [ ] First Deployment
- [ ] First Policy Creation
- [ ] Common Troubleshooting

**Configuration Category:**

- [ ] Custom Settings
- [ ] Integrations
- [ ] API Configuration
- [ ] Webhooks Setup

**Security Category:**

- [ ] Access Control
- [ ] Compliance Requirements
- [ ] Audit Trails
- [ ] Security Checklist

**Advanced Category:**

- [ ] Custom Workflows
- [ ] Automation Rules
- [ ] Performance Tuning
- [ ] Advanced Integrations

**Reference Category:**

- [ ] API Documentation
- [ ] CLI Reference
- [ ] Configuration Reference
- [ ] Glossary

---

## SECTION 05 - Design Specifications

### Colors Used

```css
Primary Section:        bg-primary-container/30  text-primary
Secondary Section:      bg-surface-container-low  text-on-surface
Warning/Alert:          bg-error-container/10    text-error
Info/Callout:           bg-surface-container-high text-on-tertiary-container
Success/Growth:         bg-primary-fixed/20      text-primary
```

### Typography

```css
Page Title:     text-4xl md:text-5xl font-extrabold
Section Title:  text-3xl font-bold
Card Title:     text-lg font-bold
Description:    text-sm text-on-surface-variant
```

### Spacing

```css
Header to first section:  mb-24
Between sections:         mb-24
Within section cards:     p-6
Card gap:                 gap-4 (grid) or gap-6 (sections)
```

### Responsive Breakpoints

```css
Mobile (< md):    1 column, full width padding
Tablet (md-lg):   2 columns, adjusted padding
Desktop (lg+):    3-4 columns, sidebar visible
Wide (xl+):       4 columns, TOC visible
```

---

## SECTION 06 - Estimated Statistics

| Element             | Count | Notes                                             |
| ------------------- | ----- | ------------------------------------------------- |
| Quick Nav Cards     | 4     | Top-level categories                              |
| Category Groups     | 7     | Getting Started, Config, etc.                     |
| Links Per Category  | 5-7   | ~40 total guide links                             |
| Role Learning Paths | 4     | Designer, Dev, Manager, Writer                    |
| Popular Guides      | 3-6   | Most viewed/recent                                |
| CTA Sections        | 2     | Support + Contribute                              |
| Total Sections      | 6     | Header + Nav + Categories + Roles + Popular + CTA |

---

## SECTION 07 - Implementation Checklist

### Content Preparation

- [ ] Write all guide titles and descriptions
- [ ] Create category list (7 categories)
- [ ] Define 40+ guide links
- [ ] Create role-based learning paths
- [ ] Select popular guides (3-6)

### HTML/CSS Structure

- [ ] Header section (breadcrumb + title + description)
- [ ] Quick navigation 4-card grid
- [ ] Category 3-column grid (7 categories)
- [ ] Role-based 4-card grid
- [ ] Popular guides section (3-column layout)
- [ ] Support & CTA sections

### Design & Styling

- [ ] Apply color system (primary, surface, tertiary, error)
- [ ] Use Manrope (headers) and Inter (body)
- [ ] Implement responsive layout (1/2/3/4 columns)
- [ ] Style hover states and transitions
- [ ] Add Material Symbols icons
- [ ] Test dark mode

### Testing

- [ ] Mobile (< 768px)
- [ ] Tablet (768-1024px)
- [ ] Desktop (1024-1280px)
- [ ] Wide (1280px+)
- [ ] Dark mode toggle
- [ ] All links functional
- [ ] Accessibility (WCAG AA)

### Integration

- [ ] Add to Docusaurus sidebar
- [ ] Generate TOC
- [ ] Cross-link from main docs
- [ ] Set up breadcrumb navigation
- [ ] Verify build succeeds

---

## SECTION 08 - Implementation Order

1. **Phase 1:** Create page header (breadcrumb, title, description)
2. **Phase 2:** Build quick navigation grid (4 cards)
3. **Phase 3:** Implement category grid with 7 categories
4. **Phase 4:** Add role-based learning paths
5. **Phase 5:** Include popular guides section
6. **Phase 6:** Add support & CTA callouts
7. **Phase 7:** Style, test, integrate with Docusaurus
8. **Phase 8:** Cross-link from all related pages

---

## SECTION 09 - Key Design Decisions

**Why 3-Column Layout?**

- Optimal for guide discovery
- Matches EATGF visual system
- Responsive 1→2→3 column flow
- Balances density and whitespace

**Why Role-Based Section?**

- Reduces cognitive load
- Users find relevant content faster
- Supports different learning styles
- Improves user retention

**Why Popular Guides?**

- Social proof (trends encourage engagement)
- Highlights most valuable content
- Drives traffic to high-quality guides
- Shows system is actively maintained

**Why Quick Navigation?**

- Users expect quick access
- Reduces clicks to core functions
- Provides entry point scaffolding
- Improves navigation flow

---

## SECTION 10 - Success Criteria

✅ Page loads in < 2 seconds
✅ Mobile-first responsive design works
✅ Dark mode properly configured
✅ All links are functional
✅ Accessibility passes WCAG AA
✅ TOC auto-generates correctly
✅ Follows template standard
✅ Includes 40+ guide links
✅ Breadcrumb navigation works

---

**Status:** Architecture Complete - Ready for Implementation
**Next Step:** Create HTML markup following this design
**Estimated Implementation Time:** 2-3 hours
**Difficulty Level:** Medium (many sections, standard components)
