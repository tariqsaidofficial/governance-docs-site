# Design System & Style Guide

## SECTION 01 - SECTION 01 - EATGF Visual Standard Reference

---

## SECTION 02 - SECTION 02 - Color Palette

### Primary Brand Colors

| Color                 | Hex     | Usage                                    | Variants      |
| --------------------- | ------- | ---------------------------------------- | ------------- |
| **Primary Blue**      | #465f88 | Links, buttons, active states, borders   | Dark: #3a537c |
| **Primary Light**     | #d6e3ff | Container backgrounds, subtle highlights |               |
| **Primary Container** | #d6e3ff | Card backgrounds, highlighted sections   |               |

### Surface & Neutral Colors

| Color                         | Hex     | Usage                       |
| ----------------------------- | ------- | --------------------------- |
| **Surface (Main)**            | #f7f9fb | Overall background          |
| **Surface Container Lowest**  | #ffffff | Content areas, cards        |
| **Surface Container Low**     | #f0f4f7 | Secondary containers        |
| **Surface Container**         | #e8eff3 | Elevated containers         |
| **Surface Container High**    | #e1e9ee | Higher elevation containers |
| **Surface Container Highest** | #d9e4ea | Highest elevation           |
| **Surface Variant**           | #d9e4ea | Subtle backgrounds          |

### Text Colors

| Color                      | Hex     | Usage                    | Context              |
| -------------------------- | ------- | ------------------------ | -------------------- |
| **On Surface (Main Text)** | #2a3439 | Headers, primary content | Headlines, body text |
| **Secondary (Body Text)**  | #526074 | Descriptions, intro text | Secondary paragraphs |
| **On Surface Variant**     | #566166 | List items, card content | Cards, lists         |
| **Slate 400**              | #717c82 | Outlines, subtle borders | Dividers             |
| **Slate 500**              | #566166 | Navigation items         | Sidebar links        |

### Status & Semantic Colors

| Color                  | Hex     | Usage                            |
| ---------------------- | ------- | -------------------------------- |
| **Tertiary**           | #5d5c78 | Info callouts, secondary actions |
| **Tertiary Container** | #d9d7f8 | Info backgrounds                 |
| **Error**              | #9f403d | Warnings, critical alerts        |
| **Error Container**    | #fe8983 | Error backgrounds                |
| **Success**            | #4CAF50 | Positive confirmations           |
| **Warning**            | #FF9800 | Caution notices                  |

### Dark Mode Colors

| Element                  | Light         | Dark          |
| ------------------------ | ------------- | ------------- |
| Background               | #f7f9fb       | #0f1419       |
| Surface Container Lowest | #ffffff       | #0b0f10       |
| Text Primary             | #2a3439       | #f6f7ff       |
| Text Secondary           | #526074       | #a9b4b9       |
| NavBar                   | #ffffff (80%) | #0f1419 (80%) |
| Sidebar                  | #f8f9fa       | #0f1419       |

---

## SECTION 03 - SECTION 03 - Typography System

### Font Stack

```
Headlines:  'Manrope', -apple-system, BlinkMacSystemFont, sans-serif
Body:       'Inter', -apple-system, BlinkMacSystemFont, sans-serif
Label:      'Inter', -apple-system, BlinkMacSystemFont, sans-serif
Monospace:  'Courier New', monospace
```

### Font Weights

| Weight    | Value | Usage                    | Example                   |
| --------- | ----- | ------------------------ | ------------------------- |
| Extrabold | 800   | Page titles (H1)         | `text-4xl font-extrabold` |
| Bold      | 700   | Section headers (H2, H3) | `text-3xl font-bold`      |
| Semibold  | 600   | Navigation items         | `font-semibold`           |
| Medium    | 500   | Secondary headers        | `font-medium`             |
| Normal    | 400   | Body text                | `font-normal` or default  |

### Font Sizing Hierarchy

| Size | Pixels | Class       | Usage                | Line Height |
| ---- | ------ | ----------- | -------------------- | ----------- |
| 5xl  | 48px   | `text-5xl`  | Page title (mobile)  | 1.1         |
| 4xl  | 36px   | `text-4xl`  | Page title (desktop) | 1.2         |
| 3xl  | 30px   | `text-3xl`  | Section title (H2)   | 1.3         |
| 2xl  | 24px   | `text-2xl`  | Subsection (H3)      | 1.4         |
| xl   | 20px   | `text-xl`   | Emphasis text        | 1.5         |
| lg   | 18px   | `text-lg`   | Intro paragraph      | 1.6         |
| base | 16px   | `text-base` | Body text            | 1.5         |
| sm   | 14px   | `text-sm`   | Card content         | 1.5         |
| xs   | 12px   | `text-xs`   | Labels, badges       | 1.4         |

### Tracking (Letter Spacing)

| Value              | Purpose  | Usage            |
| ------------------ | -------- | ---------------- |
| `tracking-tighter` | -0.015em | Badge labels     |
| `tracking-tight`   | -0.005em | Titles           |
| `tracking-normal`  | 0em      | Body text        |
| `tracking-wide`    | 0.025em  | Section labels   |
| `tracking-widest`  | 0.05em   | Uppercase labels |

### Line Height

| Value | Class             | Usage             |
| ----- | ----------------- | ----------------- |
| 1.1   | `leading-tight`   | Compressed titles |
| 1.3   | `leading-snug`    | Section headers   |
| 1.5   | `leading-relaxed` | Body paragraphs   |
| 1.75  | `leading-loose`   | Long-form content |

---

## SECTION 04 - SECTION 04 - Spacing System

### Vertical Spacing

| Value        | Pixels | Usage                    |
| ------------ | ------ | ------------------------ |
| `py-2`       | 8px    | Compact padding          |
| `py-4`       | 16px   | Standard control padding |
| `py-6`       | 24px   | Card padding             |
| `py-8`       | 32px   | Section padding          |
| `py-12`      | 48px   | Page padding             |
| `mb-2`       | 8px    | Tight spacing            |
| `mb-4`       | 16px   | Standard spacing         |
| `mb-6`       | 24px   | Section spacing          |
| `mb-8`       | 32px   | Large spacing            |
| `space-y-3`  | 12px   | List item spacing        |
| `space-y-4`  | 16px   | Card internal spacing    |
| `space-y-24` | 96px   | Section separation       |

### Horizontal Spacing

| Value   | Pixels | Usage                   |
| ------- | ------ | ----------------------- |
| `px-4`  | 16px   | Card horizontal padding |
| `px-6`  | 24px   | Sidebar/card padding    |
| `px-8`  | 32px   | Mobile content padding  |
| `px-12` | 48px   | Tablet content padding  |
| `px-20` | 80px   | Desktop content padding |
| `gap-2` | 8px    | Tight gaps              |
| `gap-3` | 12px   | Standard gaps           |
| `gap-4` | 16px   | Relaxed gaps            |
| `gap-6` | 24px   | Large gaps              |

### Grid Gaps

| Value   | Usage                              |
| ------- | ---------------------------------- |
| `gap-4` | 3-column feature grids             |
| `gap-8` | 2-column layouts (content + image) |

---

## SECTION 05 - SECTION 05 - Border & Corner Radius

### Border Radius

| Value          | Pixels         | Usage                  |
| -------------- | -------------- | ---------------------- |
| `rounded-none` | 0px            | No rounding (disabled) |
| `rounded`      | 0.125rem (2px) | Minimal rounding       |
| `rounded-lg`   | 0.25rem (4px)  | Small buttons          |
| `rounded-xl`   | 0.5rem (8px)   | Cards, containers      |
| `rounded-full` | 9999px         | Badge/pill buttons     |

### Borders

| Style        | Class                                | Usage            |
| ------------ | ------------------------------------ | ---------------- |
| Solid 1px    | `border border-primary`              | Card borders     |
| Left 4px     | `border-l-4 border-primary`          | Emphasis borders |
| Thin (0.5px) | `border-b border-outline-variant/20` | Subtle dividers  |
| None         | `border-none`                        | Remove borders   |

---

## SECTION 06 - SECTION 06 - Shadows & Elevation

### Shadow System

| Level    | Class         | Usage                     |
| -------- | ------------- | ------------------------- |
| Floating | `shadow-sm`   | NavBar, floating elements |
| Card     | `shadow-md`   | Hoverable cards           |
| Modal    | `shadow-lg`   | Modals, overlays          |
| Maximum  | `shadow-xl`   | Dropdowns                 |
| None     | `shadow-none` | Flat design               |

### Elevation Hierarchy

```
Level 0: surface-container-lowest    (white)
Level 1: surface-container-low      (slightly elevated)
Level 2: surface-container          (elevated)
Level 3: surface-container-high     (more elevated)
Level 4: surface-container-highest  (most elevated)
```

---

## SECTION 07 - SECTION 07 - Component Specifications

### Navigation Bar

**Dimensions:**

- Height: 64px (h-16)
- Padding: 24px horizontal (px-6)
- Z-index: 50 (z-50)

**Background:**

- Light: White with 80% opacity + 12px blur (backdrop-blur-md)
- Dark: Slate-900 with 80% opacity + 12px blur

**Elements:**

- Logo: text-xl font-extrabold
- Nav Links: text-sm font-bold, 24px gap
- Search Box: 256px width (w-64)
- Icons: Material Symbols Outlined

---

### Sidebar Navigation

**Dimensions:**

- Width: 256px (w-64)
- Max Height: 100vh (h-screen)
- Position: sticky top-16
- Padding: py-8, gap-y-2

**Item Styling:**

- Default: `pl-4 py-2`
- Hover: `hover:bg-slate-100 dark:hover:bg-slate-900`
- Active: `border-l-4 border-blue-800 pl-3 bg-blue-50/50`
- Icon: `text-lg (24px)`

---

### Main Content Area

**Dimensions:**

- Flex: flex-1 min-w-0
- Padding (Mobile): px-8 py-12
- Padding (Tablet): px-12 py-12
- Padding (Desktop): px-20 py-12
- Max Width for prose: max-w-4xl

**Background:**

- Color: surface-container-lowest (#ffffff)

---

### Card Components

**Standard Card:**

- Padding: p-6 (24px)
- Border Radius: rounded-xl (8px)
- Background: surface-container-low (#f0f4f7)
- Border Accent: border-l-4 border-primary

**Callout Card:**

- Padding: p-6
- Border Radius: rounded-xl
- Left Border: 4px colored border
- No shadow (flat design)

---

### Badge/Label

**Styling:**

- Padding: px-3 py-1
- Border Radius: rounded-full
- Font: text-sm font-bold
- Tracking: tracking-tighter
- Background: primary-container (#d6e3ff)
- Text: text-primary-dim (#3a537c)

---

### Code Block

**Container:**

- Padding: p-6
- Border Radius: rounded-xl
- background: inverse-surface (#0b0f10)
- Text Color: on-primary (#f6f7ff)
- Font: font-mono text-sm
- Overflow: overflow-x-auto

**Header:**

- Opacity: opacity-50
- Layout: flex justify-between
- Font Size: text-xs

---

### Buttons

**Primary Button:**

```
bg-primary text-on-primary
px-6 py-2
rounded-xl
font-semibold text-sm
hover:opacity-90
transition-all
```

**Secondary Button:**

```
text-primary
border-2 border-primary
px-6 py-2
rounded-xl
font-semibold text-sm
hover:bg-primary/10
transition-all
```

**Icon Button:**

```
p-2
rounded-lg
hover:bg-slate-100 dark:hover:bg-slate-800
transition-colors
```

---

## SECTION 08 - SECTION 08 - Responsive Breakpoints

| Breakpoint | Width   | When to Use     |
| ---------- | ------- | --------------- |
| Default    | < 640px | Mobile          |
| sm         | 640px   | Small tablet    |
| md         | 768px   | Tablet          |
| lg         | 1024px  | Sidebar appears |
| xl         | 1280px  | TOC appears     |
| 2xl        | 1536px  | Maximum width   |

### Layout Changes

```css
/* Mobile: Full width, no sidebar */
hidden lg:flex

/* Tablet: Full width, no sidebar */
flex md:block

/* Desktop (lg): Sidebar visible, content 2-column */
flex when lg

/* Wide (xl): Content 3-column with TOC */
flex when xl
```

---

## SECTION 09 - SECTION 09 - Accessibility Standards

### Color Contrast

- WCAG AA: 4.5:1 for body text
- WCAG AA: 3:1 for UI components
- Test: Use WebAIM Contrast Checker

### Focus States

```css
focus:outline-none
focus:ring-2
focus:ring-primary/20
focus:ring-offset-2
```

### Typography

- Minimum 16px for body text on mobile
- Line height ≥ 1.5 for readability
- Letter spacing adequate (no cramped text)

### Interactive Elements

- Touch targets: minimum 44x44px (11mm square)
- Pointer targets: minimum 24px
- Spacing: 8px minimum between targets

---

## SECTION 10 - Dark Mode Implementation

### Automatic Dark Mode

- Enabled via `class="dark"` on `<html>` element
- Triggered by system preference (prefers-color-scheme)
- All colors have light/dark variants

### Key Dark Mode Colors

```css
/* Backgrounds */
light: bg-white          dark: dark:bg-slate-950
light: bg-slate-50       dark: dark:bg-slate-900
light: bg-slate-100      dark: dark:bg-slate-800

/* Text */
light: text-slate-900    dark: dark:text-slate-100
light: text-slate-600    dark: dark:text-slate-400

/* Borders */
light: border-slate-200  dark: dark:border-slate-800
light: border-slate-300  dark: dark:border-slate-700

/* Transparent Overlays */
light: bg-white/80       dark: dark:bg-slate-900/80
```

---

## SECTION 11 - Icon System

### Material Symbols

- Font: Material Symbols Outlined
- Size: 24px default (text-lg)
- Variability: FILL 0, WGHT 400, GRAD 0

### Common Icons

| Icon              | Usage                  |
| ----------------- | ---------------------- |
| `home`            | Home/Dashboard         |
| `policy`          | Policy documents       |
| `security`        | Security controls      |
| `check_circle`    | Requirements, complete |
| `warning`         | Warnings, alerts       |
| `info`            | Information            |
| `lightbulb`       | Tips, best practices   |
| `arrow_right_alt` | Next action, flow      |
| `verified`        | Approved, verified     |
| `history`         | Audit logs, history    |
| `edit_note`       | Edit, notes            |
| `account_tree`    | Organization           |
| `rule`            | Rules, policies        |

---

## SECTION 12 - Grid Systems

### 12-Column Grid Base

- Each column: 1/12 width
- Gutter: 24px (gap-6)
- Standard containers: 1200px max

### Common Grid Patterns

```
3-column:  grid-cols-1 sm:grid-cols-3
2-column:  grid-cols-1 md:grid-cols-2
Responsive: auto-adapting with grid-auto-fit
```

---

## SECTION 13 - Animation & Transitions

### Transition Durations

| Duration       | Use Case           |
| -------------- | ------------------ |
| `duration-75`  | Micro-interactions |
| `duration-100` | Button hover       |
| `duration-150` | Navigation         |
| `duration-200` | Fade in/out        |
| `duration-300` | Modal appearance   |

### Easing Functions

```css
transition-all        /* All properties */
transition-colors     /* Color changes */
transition-opacity    /* Fade effects */
transition-transform  /* Slide/scale */
```

### Transforms

```css
hover:opacity-90      /* Slightly transparent */
hover:scale-105       /* Slight zoom */
hover:translate-y-1   /* Slight lift */
hover:shadow-lg       /* Shadow increase */
```

---

## SECTION 14 - Print Styles

### Print Considerations

- Remove: Navigation, TOC, footers
- Maintain: Content sections, headers
- Format: Single column, single-sided
- Colors: Convert to grayscale for efficiency

---

## SECTION 15 - SECTION 14 - Performance Standards

### Bundle Size

- Tailwind CSS: ~50KB (minified + gzip)
- Material Icons: ~40KB (cached)
- Images: < 100KB per page
- Total page weight: < 300KB

### Loading Performance

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

---

## SECTION 16 - Design File Organization

### Figma/Design System Structure

```
EATGF Portal Design System/
├── Colors
│   ├── Primary Palette
│   ├── Surface Colors
│   ├── Text Colors
│   └── Status Colors
├── Typography
│   ├── Headlines
│   ├── Body
│   └── Labels
├── Components
│   ├── Navigation
│   ├── Cards
│   ├── Buttons
│   ├── Forms
│   └── Callouts
├── Layouts
│   ├── Desktop
│   ├── Tablet
│   └── Mobile
└── Documentation
    └── Spacing Grid
```

---

## SECTION 17 - Accessibility Checklist

Before publishing any design:

- [ ] Text contrast ratio ≥ 4.5:1 (AA standard)
- [ ] UI components contrast ≥ 3:1
- [ ] All images have descriptive alt text
- [ ] Color isn't the only way to convey information
- [ ] Focus states visible (ring outline minimum)
- [ ] Touch targets ≥ 44x44px
- [ ] Keyboard navigation functional
- [ ] Dark mode support tested
- [ ] Text resizable to 200% without issues
- [ ] No autoplay media

---

**Design System Version:** 2.0
**Last Updated:** March 2026
**Authority:** EATGF Design Standards & Governance
**Next Review:** June 2026
