# EATGF Template Implementation Guide

## SECTION 01 - Quick Reference

**File Location:** `governance-docs-site/TEMPLATE_REUSABLE.html`
**Standards Document:** `TEMPLATE_STANDARD.md`

---

## SECTION 02 - Layout Architecture

### Grid System Overview

```
┌──────────────────────────────────────────────────────────────┐
│ NAVBAR (h-16, fixed, z-50)                                   │
├────────────────┬──────────────────────────┬──────────────────┤
│                │                          │                  │
│ SIDEBAR        │ MAIN CONTENT             │ TOC              │
│ w-64           │ flex-1 min-w-0           │ w-72             │
│                │ px-8..20 py-12           │                  │
│ sticky         │                          │ sticky           │
│ lg:flex        │                          │ xl:block         │
│ hidden         │                          │ hidden           │
│                │                          │                  │
├────────────────┴──────────────────────────┴──────────────────┤
│ FOOTER (flex, grid, py-12)                                   │
└──────────────────────────────────────────────────────────────┘
```

### Responsive Behavior

| Device  | Width       | Sidebar        | TOC     | Content Width              |
| ------- | ----------- | -------------- | ------- | -------------------------- |
| Mobile  | <640px      | Hidden         | Hidden  | 100% - 32px padding        |
| Tablet  | 768-1023px  | Hidden         | Hidden  | 100% - 48px padding        |
| Desktop | 1024-1279px | Visible (w-64) | Hidden  | calc(100% - 256px)         |
| Wide    | 1280px+     | Visible        | Visible | calc(100% - 256px - 288px) |

---

## SECTION 03 - Component Usage

### 2.1 Page Header Structure

Every page must include a header with:

```html
<header class="mb-16">
  <!-- Breadcrumb -->
  <nav class="flex text-xs text-slate-400 mb-4 gap-2">
    <span class="hover:text-primary">Parent Section</span>
    <span>/</span>
    <span class="text-on-surface">Current Page</span>
  </nav>

  <!-- Title -->
  <h1
    class="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6"
  >
    Page Title
  </h1>

  <!-- Description -->
  <p class="text-lg text-secondary leading-relaxed max-w-3xl">
    Clear, concise introduction (1-2 sentences maximum)
  </p>
</header>
```

**Key Rules:**

- Always include breadcrumb navigation
- H1 title must use `text-4xl md:text-5xl font-extrabold`
- Description paragraph max-width: `max-w-3xl`

---

### 2.2 Section Structure

```html
<section class="scroll-mt-24" id="unique-section-id">
  <!-- Header with Badge -->
  <div class="flex items-center gap-3 mb-6">
    <span
      class="text-primary-dim font-headline font-bold text-sm
                     tracking-tighter px-3 py-1 bg-primary-container rounded-full"
    >
      SECTION 01
    </span>
    <h2 class="text-3xl font-bold text-on-surface tracking-tight">
      Section Title
    </h2>
  </div>

  <!-- Content -->
  <div class="prose prose-slate max-w-4xl">
    <!-- All content goes here -->
  </div>
</section>
```

**Requirements:**

- ID must be unique and lowercase-hyphenated
- Always include `scroll-mt-24` for TOC anchor offset
- Badge format: `SECTION XX` (01, 02, 03, etc.)
- Wrap content in `.prose` for proper spacing

---

### 2.3 Content Cards

#### Requirements Card

```html
<div class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
  <span
    class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block"
  >
    REQUIREMENTS
  </span>
  <ul class="space-y-3 text-sm text-on-surface-variant">
    <li class="flex gap-2">
      <span class="material-symbols-outlined text-primary">check_circle</span>
      <span>Requirement text</span>
    </li>
  </ul>
</div>
```

**Customization Points:**

- Change header label: `REQUIREMENTS`, `KEY POINTS`, `CHECKLIST`, etc.
- Icon options: `check_circle`, `task_alt`, `verified`, etc.
- Border color: `border-primary` (default), `border-tertiary`, `border-error`

---

#### Code Block

```html
<div
  class="bg-inverse-surface text-on-primary p-6 rounded-xl font-mono text-sm
            mb-10 overflow-x-auto border-l-4 border-primary"
>
  <div class="flex justify-between items-center mb-4 opacity-50">
    <span class="text-xs">FILENAME.ext</span>
    <span class="text-[10px] tracking-widest">LANGUAGE</span>
  </div>
  <code class="block text-blue-200"> # Your code here </code>
</div>
```

**Tips:**

- Use `text-blue-200` for syntax highlighting in dark theme
- Keep code snippets under 15 lines for readability
- Always include filename and language label

---

#### Info Callout

```html
<div
  class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary"
>
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">info</span>
    <span
      class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container"
    >
      LABEL HERE
    </span>
  </div>
  <p class="text-sm text-on-tertiary-container">Information text</p>
</div>
```

**Icon Options:**

- `info` - General information
- `lightbulb` - Tips and best practices
- `warning` - Warnings and alerts
- `check_circle` - Success/confirmation

---

#### Warning Callout

```html
<div class="bg-error-container/10 rounded-xl p-6 border-l-4 border-error">
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-error">warning</span>
    <span class="text-xs font-bold uppercase tracking-wider text-error">
      COMPLIANCE WARNING
    </span>
  </div>
  <p class="text-sm text-on-error-container">Warning text here</p>
</div>
```

---

### 2.4 Grid Layouts

#### 3-Column Grid (Feature Cards)

```html
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div class="bg-surface-container-low p-4 rounded-xl text-center">
    <span class="material-symbols-outlined text-primary mb-2 text-3xl block">
      icon_name
    </span>
    <h4 class="text-sm font-bold block mb-1">Title</h4>
    <p class="text-xs text-slate-500">Description</p>
  </div>
  <!-- Repeat for 3 items -->
</div>
```

---

#### 2-Column Grid (Content + Image)

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- Left: Content Card -->
  <div
    class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary"
  >
    <!-- Content -->
  </div>

  <!-- Right: Image -->
  <div class="relative overflow-hidden rounded-xl h-48 md:h-full">
    <img
      class="object-cover w-full h-full grayscale opacity-80"
      src="image.jpg"
      alt="Description"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
    ></div>
  </div>
</div>
```

---

### 2.5 Table of Contents (TOC)

Automatically generated from section IDs. To make a section appear in TOC:

1. Add unique `id` to section
2. Add matching anchor link in TOC

```html
<!-- In TOC sidebar -->
<a
  href="#section-id"
  class="block text-sm font-medium text-slate-500
                             hover:text-primary border-l-2 border-transparent pl-4"
>
  Section Title
</a>
```

---

## SECTION 04 - Color Usage Guidelines

### Primary Brand Colors

```
Primary Blue: #465f88
- Use for: Links, active states, primary buttons
- Containers: #d6e3ff (light variant)
- Text: #3a537c (dark variant)
```

### Surface Colors

```
White (Lowest): #ffffff - Main content background
Light Gray: #f0f4f7 - Secondary containers
Medium Gray: #e8eff3 - Elevated containers
Dark Gray: #d9e4ea - High contrast containers
```

### Status Colors

```
Success/Info: Primary Blue (#465f88)
Warning/Alert: Error Red (#9f403d)
Tertiary: Purple (#5d5c78) - Info callouts
```

### Text Colors

```
Primary: #2a3439 - Headers, main text
Secondary: #526074 - Body text, descriptions
Tertiary: #566166 - Muted text, labels
```

---

## SECTION 05 - Typography Rules

### Font Selection

```
Headlines (h1, h2, h3): Manrope
  - Bold/Extrabold weights
  - Tight tracking

Body Text (p, li): Inter
  - Regular/Medium weights
  - Normal leading (1.5-1.75)

Labels/Small: Inter
  - Uppercase, bold
  - Wide tracking
```

### Size Progression

```
h1: text-4xl md:text-5xl font-extrabold (36-48px)
h2: text-3xl font-bold (30px)
h3: text-2xl font-bold (24px)
p:  text-base (16px)
small: text-sm (14px)
label: text-xs (12px)
```

---

## SECTION 06 - Component Checklist

Before publishing any page, verify:

### Structure

- [ ] Page header with breadcrumb
- [ ] H1 title present
- [ ] Introduction paragraph
- [ ] All sections have IDs and badges

### Content Quality

- [ ] All links are canonical/internal
- [ ] No orphaned paragraphs
- [ ] Images have alt text
- [ ] Code blocks properly formatted
- [ ] Callouts use correct icon/border color

### Responsive

- [ ] Mobile < 768px: content readable
- [ ] Tablet 768-1024px: proper padding
- [ ] Desktop 1024+px: sidebar visible
- [ ] Wide 1280px+: TOC visible

### Dark Mode

- [ ] All text colors readable
- [ ] Callouts maintain contrast
- [ ] Images remain visible
- [ ] No color-only information

### Accessibility

- [ ] All images have alt text
- [ ] Links have clear labels
- [ ] Proper heading hierarchy
- [ ] Sufficient color contrast

---

## SECTION 07 - Common Customizations

### Change Sidebar Title

```html
<!-- Original -->
<span class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
  Framework Layers
</span>

<!-- Customized -->
<span class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
  Policy Documentation
</span>
```

### Add New Callout Type

```html
<!-- Custom: Success -->
<div class="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-green-600">check</span>
    <span class="text-xs font-bold uppercase tracking-wider text-green-700">
      SUCCESS
    </span>
  </div>
  <p class="text-sm text-green-900">Success message</p>
</div>
```

### Adjust Content Width

```html
<!-- Default: max-w-4xl -->
<div class="prose prose-slate max-w-5xl">
  <!-- For wider content -->
</div>

<!-- Or: max-w-2xl -->
<div class="prose prose-slate max-w-2xl">
  <!-- For narrower, focused content -->
</div>
```

### Add Sidebar Sections/Groups

```html
<!-- Group Header -->
<div class="px-6 mb-4 mt-8">
  <div class="text-xs font-bold uppercase tracking-widest text-slate-400">
    Section Category
  </div>
</div>

<!-- Items under group -->
<a href="#" class="flex items-center gap-3 ..."> ... </a>
```

---

## SECTION 08 - Docusaurus Integration

### Frontmatter for Markdown

```yaml
---
title: Page Title
sidebar_label: Short Label
slug: /framework/section/page
description: Brief description for SEO
---
# Main Content
```

### Converting HTML to Markdown

1. Keep HTML structure for sidebars (handled by theme)
2. Convert body content to Markdown
3. Preserve classes for styling

### Build & Deploy

```bash
# Build current template
cd governance-docs-site/portal
npm run build

# Serve locally for testing
npm run serve

# Deploy (via GitHub Actions)
git push origin main
```

---

## SECTION 09 - Performance Optimization

### Image Guidelines

- Format: WebP with JPG fallback
- Size: Max 1MB per image
- Dimensions: Actual pixel size (no upscaling)
- Lazy loading: Default enabled

### CSS/JS

- All styles via Tailwind (included)
- No external stylesheets
- Minimal inline styles
- Material icons via CDN (cached)

### Load Time Target

- First paint: < 2s
- Interactive: < 3s
- Total page: < 4s

---

## SECTION 10 - Troubleshooting

### Sidebar Not Showing

```
Issue: hidden lg:flex not responsive
Solution: Check viewport width in DevTools
Expected: Visible at 1024px+
```

### Colors Look Wrong

```
Issue: Dark mode not applying
Solution: Check class="dark" on <html>
Expected: Automatic via system preference
```

### ToC Links Broken

```
Issue: Anchor not working
Solution: Verify section has matching id
Format: <section id="section-id"> + <a href="#section-id">
```

### Layout Shifts

```
Issue: Content jumping on load
Solution: Set fixed navbar height (h-16)
Verify: pt-16 on main container applied
```

---

## SECTION 11 - Support & Maintenance

### Update Frequency

- Template: Quarterly reviews
- Colors: Stable (no breaking changes planned)
- Components: Add-only (don't remove)

### Version Tracking

- Template v2.0
- Last Updated: March 2026
- Next Review: June 2026

### Feedback

- Issues: Report via GitHub
- Suggestions: Governance Council
- Breaking Changes: Announced 1 quarter ahead

---

**Quick Links:**

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Material Symbols](https://fonts.google.com/icons)
- [Docusaurus Docs](https://docusaurus.io)
