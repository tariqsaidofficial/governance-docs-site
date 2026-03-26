# EATGF Documentation Template Standard - Complete English Version

## SECTION 01 - Template Overview

This unified template defines the fixed standards for presenting all documentation content in the Technical Governance Portal.

---

## SECTION 02 - Analysis of Main Template Components

### 1.1 Architecture Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                        TOP NAVIGATION BAR                        │
│  Logo | Docs | API | Blog  [Search]  [Theme Toggle]            │
└─────────────────────────────────────────────────────────────────┘
┌─────────────┬──────────────────────────────────┬────────────────┐
│             │                                  │                │
│   SIDEBAR   │         MAIN CONTENT AREA       │    TOC SIDEBAR  │
│ Navigation  │      (Flexible Width)            │  (On This Page) │
│   w-64      │        flex-1 min-w-0            │     w-72        │
│             │                                  │                │
│   Fixed     │      px-8 md:px-12 lg:px-20    │    sticky top   │
│   Height    │         py-12                    │    Scrollable   │
│             │                                  │                │
└─────────────┴──────────────────────────────────┴────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│                           FOOTER                                │
│  Logo | Resources | Legal | Community | Copyright              │
└─────────────────────────────────────────────────────────────────┘
```

**Responsive Breakpoints:**

- Mobile (< md): Sidebar hidden, TOC hidden, Full width content
- Tablet (md-lg): Sidebar hidden, TOC hidden, Adjusted padding
- Desktop (lg+): Sidebar visible, Content middle, TOC hidden
- Wide (xl+): All elements visible

---

## SECTION 03 - Standard Design Components

### 2.1 Top Navigation Bar

**Properties:**

- `fixed top-0 w-full z-50` - Fixed at top of page
- `bg-white/80 dark:bg-slate-900/80 backdrop-blur-md` - Transparent background with blur effect
- `h-16` - Fixed height of 64px
- `border-b border-slate-200/50` - Top border line separator

**Contents:**

```html
<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80
            backdrop-blur-md border-b border-slate-200/50 shadow-sm">
  <div class="flex items-center justify-between px-6 h-16">
    <!-- Logo/Title Side -->
    <div class="flex items-center gap-8">
      <span class="text-xl font-extrabold text-blue-900">
        Technical Governance Portal
      </span>
      <div class="hidden md:flex gap-6">
        <!-- Navigation Links (Docs, API, Blog) -->
      </div>
    </div>

    <!-- Search & Toggle Side -->
    <div class="flex items-center gap-4">
      <input class="hidden sm:block bg-surface-container-lowest
                    border border-outline-variant/20" />
      <button class="material-symbols-outlined">code</button>
    </div>
  </div>
</nav>
```

---

### 2.2 Side Navigation Bar (Left)

**Properties:**

- `sticky top-16 w-64` - Fixed width of 256px
- `h-screen overflow-y-auto` - Full screen height with scrolling
- `hidden lg:flex` - Visible only on lg+ screen sizes
- `bg-slate-50 dark:bg-slate-950` - Light or dark background

**Structure:**

```html
<aside class="h-screen sticky top-16 w-64 overflow-y-auto
              bg-slate-50 dark:bg-slate-950 hidden lg:flex flex-col py-8 gap-y-2">

  <!-- Header Section -->
  <div class="px-6 mb-6">
    <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
      Documentation
    </div>
    <div class="text-xs font-medium text-slate-500">v2.4.0-stable</div>
  </div>

  <!-- Navigation Items -->
  <a href="#" class="flex items-center gap-3 font-manrope font-semibold text-sm
                     text-slate-500 pl-4 hover:bg-slate-100 py-2 transition-all">
    <span class="material-symbols-outlined">icon_name</span>
    <span>Menu Item</span>
  </a>

  <!-- Active/Current Item -->
  <a href="#" class="flex items-center gap-3 font-manrope font-semibold text-sm
                     text-blue-800 border-l-4 border-blue-800 pl-3
                     bg-blue-50/50 py-2">
    <span class="material-symbols-outlined">active_icon</span>
    <span>Current Page</span>
  </a>
</aside>
```

**Navigation Item States:**

- **Default:** `text-slate-500 pl-4` - Gray text with standard padding
- **Hover:** `hover:bg-slate-100` - Light background on mouse hover
- **Active:** `border-l-4 border-blue-800 bg-blue-50/50 text-blue-800 pl-3` - Left border accent with blue background

---

### 2.3 Main Content Area

**Properties:**

- `flex-1 min-w-0` - Takes remaining available space
- `bg-surface-container-lowest` - Pure white background
- `px-8 md:px-12 lg:px-20 py-12` - Responsive padding for different screens

**Internal Structure:**

```html
<main class="flex-1 min-w-0 bg-surface-container-lowest
             px-8 md:px-12 lg:px-20 py-12">

  <!-- Page Header -->
  <header class="mb-16">
    <!-- Breadcrumb Navigation -->
    <nav class="flex text-xs text-slate-400 mb-4 gap-2">
      <span class="hover:text-primary cursor-pointer">Governance</span>
      <span>/</span>
      <span class="text-on-surface">Core Principles</span>
    </nav>

    <!-- Page Title -->
    <h1 class="text-4xl md:text-5xl font-extrabold text-on-surface
               tracking-tight mb-6">
      Core Principles
    </h1>

    <!-- Description -->
    <p class="text-lg text-secondary leading-relaxed max-w-3xl">
      This section presents the foundational principles underlying all governance
      decisions and policy implementation across the enterprise platform.
    </p>
  </header>

  <!-- Main Content Sections -->
  <div class="space-y-24">
    <!-- Content sections go here -->
  </div>
</main>
```

---

### 2.4 Content Section Structure

Each content section follows this standard structure:

```html
<section class="scroll-mt-24" id="section-id">
  <!-- Section Header with Badge -->
  <div class="flex items-center gap-3 mb-6">
    <span class="text-primary-dim font-headline font-bold text-sm
                 tracking-tighter px-3 py-1 bg-primary-container rounded-full">
      SECTION 01
    </span>
    <h2 class="text-3xl font-bold text-on-surface tracking-tight">
      Section Title
    </h2>
  </div>

  <!-- Section Content -->
  <div class="prose prose-slate max-w-4xl">
    <!-- Prose content, cards, code blocks, etc -->
  </div>
</section>
```

**Badge Styling:**

- `bg-primary-container` - Light blue background color
- `text-primary-dim` - Dark blue text color
- `rounded-full` - Fully rounded corners (border-radius: 9999px)
- `text-sm tracking-tighter px-3 py-1` - Small font with tight character spacing and padding

---

### 2.5 Content Card Components

#### Requirements Card

```html
<div class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
  <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
    REQUIREMENTS
  </span>
  <ul class="space-y-3 text-sm text-on-surface-variant">
    <li class="flex gap-2">
      <span class="material-symbols-outlined text-primary">check_circle</span>
      Requirement item 1
    </li>
    <li class="flex gap-2">
      <span class="material-symbols-outlined text-primary">check_circle</span>
      Requirement item 2
    </li>
  </ul>
</div>
```

**Properties:**

- `border-l-4 border-primary` - Blue left border accent
- Icon: `check_circle` - Checkmark icon for visual emphasis
- Background: `surface-container-low` - Light neutral background

---

#### Code Block Card

```html
<div class="bg-inverse-surface text-on-primary p-6 rounded-xl font-mono text-sm
            mb-10 overflow-x-auto border-l-4 border-primary">

  <!-- Header -->
  <div class="flex justify-between items-center mb-4 opacity-50">
    <span class="text-xs font-label">FILENAME.PY</span>
    <span class="text-[10px] font-label tracking-widest">LANGUAGE</span>
  </div>

  <!-- Code -->
  <code class="block text-blue-200">
    # Code content here
  </code>
</div>
```

**Properties:**

- `bg-inverse-surface` - Dark background (black)
- `text-on-primary` - Light text color (white)
- `font-mono` - Monospace font for code
- `text-blue-200` - Light blue syntax highlighting

---

#### Info Callout

```html
<div class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary">
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">info</span>
    <span class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container">
      IMPLEMENTATION NOTE
    </span>
  </div>
  <p class="text-sm text-on-tertiary-container">Callout content text</p>
</div>
```

**Properties:**

- `border-l-4 border-tertiary` - Purple left border accent
- Icon: `info` - Information icon
- Used for: Implementation notes and tips

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
  <p class="text-sm text-on-error-container">Warning content text</p>
</div>
```

**Properties:**

- `border-l-4 border-error` - Red left border accent
- `bg-error-container/10` - Transparent red background (10% opacity)
- Icon: `warning` - Warning triangle icon

---

#### Best Practice Callout

```html
<div class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary">
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">lightbulb</span>
    <span class="text-xs font-bold uppercase tracking-wider text-on-tertiary-container">
      BEST PRACTICE
    </span>
  </div>
  <p class="text-sm text-on-tertiary-container">Best practice content</p>
</div>
```

---

### 2.6 Grid Components

#### 3-Column Grid

```html
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
  <div class="bg-surface-container-low p-4 rounded-xl text-center">
    <span class="material-symbols-outlined text-primary mb-2">icon_name</span>
    <h4 class="text-sm font-bold block mb-1">Title</h4>
    <p class="text-xs text-slate-500">Description</p>
  </div>
  <!-- Repeat for 3 items -->
</div>
```

---

#### 2-Column Grid (Content + Image)

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
  <div class="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
    <!-- Content -->
  </div>
  <div class="relative overflow-hidden rounded-xl h-48 md:h-full">
    <img class="object-cover w-full h-full grayscale opacity-80"
         src="image.jpg" />
    <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
  </div>
</div>
```

---

### 2.7 Table of Contents (Right Sidebar)

**Properties:**

- `hidden xl:block w-72` - Visible only on xl+ screen sizes
- `sticky top-16 h-screen py-12 px-6 overflow-y-auto` - Fixed positioning with scrolling

```html
<aside class="hidden xl:block w-72 sticky top-16 h-screen py-12 px-6 overflow-y-auto">

  <!-- TOC Header -->
  <h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
    On this page
  </h3>

  <!-- TOC Links -->
  <nav class="space-y-4">
    <a href="#section-1" class="block text-sm font-medium text-slate-500
                               hover:text-primary transition-colors
                               border-l-2 border-transparent pl-4">
      Section 1 Title
    </a>
    <a href="#section-1-subsection" class="block text-sm font-medium text-slate-500
                                          hover:text-primary transition-colors
                                          border-l-2 border-transparent pl-4 ml-4">
      Subsection Title
    </a>
  </nav>

  <!-- Support Section -->
  <div class="mt-12 pt-12 border-t border-slate-200/50">
    <div class="bg-primary-container/30 p-4 rounded-xl">
      <span class="text-xs font-bold text-primary mb-2 block">NEED HELP?</span>
      <p class="text-xs text-secondary leading-relaxed mb-4">
        Questions? Reach out to our team for support.
      </p>
      <button class="text-xs font-bold text-primary hover:underline">
        Contact Support →
      </button>
    </div>
  </div>
</aside>
```

---

### 2.8 Footer

```html
<footer class="w-full py-12 px-8 mt-20 bg-slate-100 dark:bg-slate-950
               border-t border-slate-200 dark:border-slate-800">

  <!-- Main Content Grid -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

    <!-- Logo/Description Column -->
    <div class="col-span-1 md:col-span-1">
      <div class="font-manrope font-bold text-slate-900 dark:text-slate-100 mb-4">
        Technical Governance Portal
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        Description text here
      </p>
    </div>

    <!-- Resources Column -->
    <div class="space-y-3">
      <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100
                 uppercase tracking-widest">
        Resources
      </h4>
      <div class="flex flex-col gap-2">
        <a href="#" class="font-inter text-xs text-slate-500 dark:text-slate-400
                          hover:text-blue-600 transition-colors">
          Documentation
        </a>
        <!-- More links -->
      </div>
    </div>

    <!-- Legal & Community Columns -->
    <!-- Similar structure -->
  </div>

  <!-- Copyright Section -->
  <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200/50">
    <p class="font-inter text-xs text-slate-500 dark:text-slate-400">
      © 2024 Enterprise Governance Framework. Built with Editorial Engineering.
    </p>
  </div>
</footer>
```

---

## SECTION 04 - Color Palette System

### Primary Colors

| Variable            | Use Case                        | Hex Value |
| ------------------- | ------------------------------- | --------- |
| `primary`           | Main buttons, links, highlights | `#465f88` |
| `primary-dim`       | Darker variant for emphasis     | `#3a537c` |
| `primary-fixed`     | Light fixed variant             | `#d6e3ff` |
| `primary-container` | Background for primary content  | `#d6e3ff` |

### Surface Colors

| Variable                   | Use Case                        |
| -------------------------- | ------------------------------- |
| `surface`                  | Main background color           |
| `surface-container-lowest` | Content area background (white) |
| `surface-container-low`    | Card backgrounds                |
| `surface-container`        | Slightly elevated containers    |
| `surface-container-high`   | More elevated containers        |

### Text Colors

| Variable             | Use Case       |
| -------------------- | -------------- |
| `on-surface`         | Primary text   |
| `on-surface-variant` | Secondary text |
| `secondary`          | Light text     |

### Status Colors

| Variable          | Use Case               |
| ----------------- | ---------------------- |
| `error`           | Errors and warnings    |
| `error-container` | Error backgrounds      |
| `tertiary`        | Info and accents       |

---

## SECTION 05 - Typography System

### Font Families

```javascript
{
  "headline": ["Manrope"],      // Headers and bold text
  "body": ["Inter"],            // Main body text
  "label": ["Inter"]            // Labels and small text
}
```

### Font Sizes & Usage

| Size    | Class                                 | Usage                  |
| ------- | ------------------------------------- | ---------------------- |
| 4xl-5xl | `text-4xl md:text-5xl font-extrabold` | Page H1 titles         |
| 3xl     | `text-3xl font-bold`                  | Section H2 titles      |
| lg      | `text-lg text-secondary`              | Intro paragraphs       |
| base    | `text-base`                           | Body text              |
| sm      | `text-sm`                             | Cards and labels       |
| xs      | `text-xs`                             | Smaller labels/badges  |

### Font Weights

- `font-extrabold` - Page titles (weight: 800)
- `font-bold` - Section titles, headers (weight: 700)
- `font-semibold` - Navigation items (weight: 600)
- `font-medium` - Secondary headers (weight: 500)
- `font-normal` - Body text (weight: 400)

---

## SECTION 06 - Spacing System

### Consistent Spacing Values

```
py-12    = vertical padding (48px)
px-6     = horizontal padding (24px)
px-8     = horizontal padding (32px)
px-20    = horizontal padding (80px)
gap-3    = gap between items (12px)
gap-6    = gap between sections (24px)
space-y-24 = vertical spacing between sections (96px)
mb-6     = margin bottom (24px)
```

### Padding Presets

- **Main content:** `px-8 md:px-12 lg:px-20 py-12`
- **Cards:** `p-6`
- **Sidebar:** `py-8 gap-y-2`

---

## SECTION 07 - Responsive Design Rules

### Breakpoint Strategy

```
Base:      Mobile-first (< 640px)
sm:        640px and up
md:        768px and up
lg:        1024px and up (Sidebar visible)
xl:        1280px and up (TOC visible)
```

### Layout Changes by Breakpoint

| Screen Size | Sidebar | TOC     | Navbar  | Content    |
| ----------- | ------- | ------- | ------- | ---------- |
| Mobile      | Hidden  | Hidden  | Compact | Full width |
| Tablet      | Hidden  | Hidden  | Full    | Full width |
| Desktop     | Visible | Hidden  | Full    | Flex       |
| Wide (xl)   | Visible | Visible | Full    | Flex       |

---

## SECTION 08 - Interactive States

### Link States

```css
default:  text-slate-500
hover:    text-primary with opacity change
active:   border-l-4 border-blue-800, bg-blue-50/50
```

### Button States

```css
default:   bg-primary text-on-primary
hover:     increased opacity or brightness
active:    increased shadow depth
disabled:  50% opacity
```

### Transition Timing

- `transition-all` - General transitions
- `duration-200` - 200ms default duration
- `duration-150` - Slightly faster transitions

---

## SECTION 09 - Material Design Icons Integration

### Usage Pattern

```html
<span class="material-symbols-outlined text-primary text-lg">
  icon_name
</span>
```

### Common Icons in Template

| Icon           | Usage                  |
| -------------- | ---------------------- |
| `info`         | Information callouts   |
| `warning`      | Warning callouts       |
| `lightbulb`    | Best practice tips     |
| `check_circle` | Requirements/checklist |
| `account_tree` | Navigation items       |
| `rule`         | Policy/Rule items      |

---

## SECTION 10 - Dark Mode Implementation

### Dark Mode Patterns

```html
<!-- Background Colors -->
light: bg-white dark:bg-slate-900

<!-- Text Colors -->
light: text-slate-900 dark:text-slate-100

<!-- Border Colors -->
light: border-slate-200 dark:border-slate-800

<!-- Overlay/Transparent -->
light: bg-white/80 dark:bg-slate-900/80
```

---

## SECTION 11 - Template Implementation Checklist

### For Every Documentation Page

- [ ] **Frontmatter Metadata**

  ```yaml
  ---
  title: Page Title
  sidebar_label: Display Label
  slug: /path/to/page
  ---
  ```

- [ ] **Page Structure**
  - [ ] Header with breadcrumb navigation
  - [ ] H1 title
  - [ ] Introduction paragraph

- [ ] **Content Organization**
  - [ ] Use semantic sections with IDs
  - [ ] Use `scroll-mt-24` for TOC linking
  - [ ] Number sections (SECTION 01, 02, etc.)

- [ ] **Content Components**
  - [ ] Requirement cards where applicable
  - [ ] Code blocks with syntax highlighting
  - [ ] Callout boxes (Info, Warning, Best Practice)
  - [ ] Supporting images with gradients

- [ ] **TOC Inclusion**
  - [ ] All main sections linked
  - [ ] Nested navigation for subsections
  - [ ] Support/help section at bottom

- [ ] **Responsive Testing**
  - [ ] Mobile (< 768px) - sidebar hidden
  - [ ] Tablet (768-1024px) - sidebar hidden
  - [ ] Desktop (1024-1280px) - sidebar visible
  - [ ] Wide (1280px+) - TOC visible

---

## SECTION 12 - Allowed and Prohibited Elements

### ✅ Allowed

- Material Design symbols
- Tailwind utility classes
- Semantic HTML
- Markdown with HTML extensions
- Dark mode support
- Gradient overlays

### ❌ Prohibited

- Custom CSS in documents
- Inline styles (except critical)
- External font loads (use preset fonts only)
- Non-standard icon sets
- Animated elements (static only)

---

## SECTION 13 - Pre-Publication Checklist

Before publishing any new document:

```markdown
- [ ] Follows this template structure
- [ ] All color variables use defined palette
- [ ] All typography uses Manrope/Inter fonts
- [ ] Responsive at all breakpoints
- [ ] Dark mode compatible
- [ ] Code blocks properly highlighted
- [ ] All links functional and canonical
- [ ] TOC generated and accurate
- [ ] Build passes without errors
- [ ] Sidebar navigation correctly positioned
```

---

**Last Updated:** March 26, 2026
**Version:** 2.0 - Complete Template Standard
**Authority:** EATGF Documentation Governance
**Language:** 100% English - All content in professional English
