# EATGF Template System Documentation

## SECTION 01 - Complete Reference Implementation

---

## SECTION 02 - Overview

This folder contains a **unified template system** for all documentation pages in the Technical Governance Portal. It covers everything from visual design to technical implementation.

### Problem Solved

**Before this system:**

- ❌ Inconsistent designs across pages
- ❌ No unified standards for colors and fonts
- ❌ Difficult maintenance and updates
- ❌ Lack of design consistency

**After implementing this system:**

- ✅ Unified experience across all pages
- ✅ Clear and applicable standards
- ✅ Easy maintenance and updates
- ✅ Complete design consistency

---

## SECTION 03 - System Files

### 1. **TEMPLATE_STANDARD.md** ⭐ START HERE

**Importance:** Main file defining all standards
**Content:**

- Complete page layout (3-column layout)
- All component specifications (Navbar, Sidebar, Content, Footer)
- Unified color system
- Typography standards (fonts, sizes, weights)
- Spacing and spacing system
- Complete checklist

**Usage:**

```bash
# Read this file first to understand all standards
cat TEMPLATE_STANDARD.md
```

---

### 2. **TEMPLATE_REUSABLE.html** 💻 THE CODE

**Importance:** Complete, ready-to-use HTML
**Content:**

- Full, working HTML/CSS code
- Tailwind configuration included
- All page components implemented
- Code comments explaining each section
- Dark Mode support built-in

**Usage:**

```bash
# Copy this file for a new page
cp TEMPLATE_REUSABLE.html my-new-page.html

# Or open directly in browser
open TEMPLATE_REUSABLE.html
```

---

### 3. **TEMPLATE_USAGE_GUIDE.md** 🎯 HOW-TO

**Importance:** Practical implementation guide
**Content:**

- Step-by-step instructions for using templates
- Explanation of each class and utility
- Responsive breakpoints and usage
- How to customize colors and fonts
- Common troubleshooting

**Usage:**

```bash
# Search for something specific
grep -i "callout" TEMPLATE_USAGE_GUIDE.md

# Or read a specific section
head -n 100 TEMPLATE_USAGE_GUIDE.md
```

---

### 4. **COMPONENT_EXAMPLES.md** 🎨 EXAMPLES

**Importance:** Complete code examples for every component
**Content:**

- Complete examples for each header type
- Examples for each section type
- Examples for each card/callout type
- Complete real-world page example (Git Governance Policy)
- Ready-to-copy templates

**Usage:**

```bash
# Find a specific example
grep -A 20 "Info Callout" COMPONENT_EXAMPLES.md

# Or copy a template directly from the file
```

---

### 5. **DESIGN_SYSTEM.md** 🎭 THE REFERENCE

**Importance:** Detailed reference for all visual design aspects
**Content:**

- Precise definitions for each color with Hex codes
- Complete font sizes and weights
- Full spacing system
- Border radius and shadows
- Component specifications (Navigation, Cards, etc.)
- Accessibility standards
- Dark Mode support

**Usage:**

```bash
# Search for a specific color
grep -i "primary blue" DESIGN_SYSTEM.md

# Or find font size tables
grep -A 10 "Font Sizing" DESIGN_SYSTEM.md
```

---

## SECTION 04 - Quick Start

### For Developers

**Step 1: Understand the Standards**

```bash
# Read the basic standards (15 minutes)
cat TEMPLATE_STANDARD.md | head -n 200
```

**Step 2: Choose a Starting Template**

```bash
# Copy the complete HTML
cp TEMPLATE_REUSABLE.html pages/my-new-page.html

# Or open examples from COMPONENT_EXAMPLES.md
```

**Step 3: Customize Content**

- Edit the titles
- Add your sections
- Remove dummy content
- Test on all devices

---

### For Designers

**Step 1: Load Design System**

```bash
# Read complete DESIGN_SYSTEM.md
cat DESIGN_SYSTEM.md
```

**Step 2: Understand Color System**

- 7 primary colors only
- Fixed variables (Light/Dark variants)
- No random changes

**Step 3: Use Standard Sizes**

- Font sizes: 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px
- Only these (no intermediate sizes)

---

### For Content Editors

**Step 1: Understand Structure**

```bash
# Read COMPONENT_EXAMPLES.md
cat COMPONENT_EXAMPLES.md
```

**Step 2: Use the Examples**

- Copy the section you need
- Write your content
- Test in browser

**Step 3: Check Before Publishing**

- Use checklist from TEMPLATE_STANDARD.md
- Test on Mobile
- Check Dark Mode

---

## SECTION 05 - File Usage Map

```
┌─────────────────────────────────────┐
│  What do you want to do?            │
└─────────────────────────────────────┘
            │
     ┌──────┼──────┐
     ▼      ▼      ▼
 Understand Setup Customize
 Standards   Template Component
     │      │      │
     ▼      ▼      ▼
 TEMPLATE ├─ TEMPLATE ├─ COMPONENT
 _STANDARD│ _REUSABLE │ _EXAMPLES
     │      │      │
     └──────┼──────┘
            ▼
        Get started!
```

---

## SECTION 06 - Usage by Role

### Product Manager

1. Read `TEMPLATE_STANDARD.md` - Overview section
2. Understand layout architecture
3. Know accessibility standards

### Frontend Developer

1. Read `TEMPLATE_USAGE_GUIDE.md` - completely
2. Copy `TEMPLATE_REUSABLE.html`
3. Use `COMPONENT_EXAMPLES.md` for examples

### UX/UI Designer

1. Study `DESIGN_SYSTEM.md` - completely
2. Use exact color palette
3. Follow typography rules strictly

### Content Writer

1. Read `COMPONENT_EXAMPLES.md`
2. Use existing templates
3. Follow checklist

### QA/Tester

```bash
Test all elements:
- Mobile responsiveness
- Dark mode
- Accessibility (contrast, focus states)
- Link functionality
```

---

## SECTION 07 - Pre-Publication Checklist

```markdown
### Structure

- [ ] Page header with breadcrumb
- [ ] H1 title is present
- [ ] Introduction paragraph exists
- [ ] All sections have unique IDs

### Content Quality

- [ ] All links are internal/canonical
- [ ] Images have alt text
- [ ] Code blocks properly formatted
- [ ] Callouts use correct styles

### Responsive

- [ ] Mobile: content readable
- [ ] Tablet: proper padding
- [ ] Desktop: sidebar visible
- [ ] Wide: TOC visible

### Visual

- [ ] Colors match palette
- [ ] Typography follows rules
- [ ] Spacing is consistent
- [ ] Dark mode works

### Accessibility

- [ ] Color contrast 4.5:1 minimum
- [ ] Focus states visible
- [ ] Touch targets ≥ 44px
- [ ] Keyboard navigation works
```

---

## SECTION 08 - Related Files

### In Workspace

```
governance-docs-site/
├── TEMPLATE_STANDARD.md          ← Core standards
├── TEMPLATE_REUSABLE.html        ← Ready HTML
├── TEMPLATE_USAGE_GUIDE.md       ← Implementation guide
├── COMPONENT_EXAMPLES.md         ← Examples
├── DESIGN_SYSTEM.md              ← Visual reference
├── README_TEMPLATE_SYSTEM.md     ← This file
├── framework/                    ← Documentation content
│   └── *.md                      ← Documentation pages
└── portal/                       ← Docusaurus site
    ├── package.json
    └── tsconfig.json
```

---

## SECTION 09 - Quick Examples

### Add New Section

```html
<!-- Copy this template from COMPONENT_EXAMPLES.md -->
<section class="scroll-mt-24" id="my-section">
  <div class="flex items-center gap-3 mb-6">
    <span
      class="text-primary-dim font-headline font-bold text-sm
                     tracking-tighter px-3 py-1 bg-primary-container rounded-full"
    >
      SECTION 01
    </span>
    <h2 class="text-3xl font-bold text-on-surface tracking-tight">
      Your Title
    </h2>
  </div>
  <div class="prose prose-slate max-w-4xl">
    <!-- Your content here -->
  </div>
</section>
```

### Add Callout

```html
<!-- Copy from DESIGN_SYSTEM.md callout section -->
<div
  class="bg-surface-container-high rounded-xl p-6 border-l-4 border-tertiary"
>
  <div class="flex items-center gap-2 mb-2">
    <span class="material-symbols-outlined text-tertiary">lightbulb</span>
    <span class="text-xs font-bold uppercase tracking-wider">LABEL</span>
  </div>
  <p class="text-sm">Your content</p>
</div>
```

---

## SECTION 10 - Support and FAQ

### Q: How do I change the primary color?

**A:** Edit Tailwind config in `TEMPLATE_STANDARD.md` section 3:

```javascript
tailwind.config.primary = "#your-color";
```

### Q: Can I use custom fonts?

**A:** No - use only Manrope and Inter as defined in the system

### Q: How do I test Dark Mode?

**A:** Read DESIGN_SYSTEM.md section 9, then toggle in DevTools

### Q: What's the minimum color contrast?

**A:** WCAG AA = 4.5:1 for body text, 3:1 for UI (DESIGN_SYSTEM.md section 8)

---

## SECTION 11 - Review and Update Schedule

**Schedule:**

- Quarterly reviews: June, Sept, Dec (quarter-way dates in 2026)
- Breaking changes: Announced 1 quarter ahead
- Current version: 2.0 (March 2026)
- Next review: June 2026

**To Report Issues:**

1. Open GitHub issue
2. Copy page URL
3. Describe problem in detail
4. Attach screenshot if possible

---

## SECTION 12 - Final Verification

All files:

- ✅ Compatible with Docusaurus 3.9.2
- ✅ Use Tailwind CSS v3+
- ✅ Tested on all devices
- ✅ Compatible with Dark Mode
- ✅ Follow WCAG AA accessibility standards

---

## SECTION 13 - References

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Material Design 3 Specification](https://m3.material.io)
- [Material Symbols Font](https://fonts.google.com/icons)
- [WCAG 2.1 Guidelines](https://w3c.github.io/wcag/)
- [Docusaurus 3.x Documentation](https://docusaurus.io)

---

## SECTION 14 - Contributors

**Template Owner:** EATGF Design & Documentation Team
**Created:** March 26, 2026
**Authority:** Enterprise Governance Framework
**Version:** 2.0

---

## SECTION 15 - Additional Notes

### Why 3-Column Layout?

- **Sidebar (256px):** Navigation container
- **Content (flex):** Primary work content
- **TOC (288px):** Current page summary
- Good UX design for wide screens

### Why Material Symbols?

- Free and reliable
- Supported by Google
- Lightweight
- Over 3000 icon options

### Why Tailwind?

- Fast and efficient
- No custom CSS needed
- Built-in responsive
- Active community

---

**Ready?** Start with `TEMPLATE_STANDARD.md` now! 🚀
