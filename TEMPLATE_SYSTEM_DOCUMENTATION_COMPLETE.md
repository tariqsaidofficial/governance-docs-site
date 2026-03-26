# EATGF Template System - Complete English Documentation

## SECTION 01 - Documentation Index (All Files in English)

This is the **complete unified template system** for EATGF governance documentation portal implemented in professional English.

---

## SECTION 02 - File Structure & Contents

### Core Template Files

#### 1. **TEMPLATE_STANDARD.md**

**Status:** ✅ Primary reference
**Purpose:** Define all standards
**Contains:**

- Architecture overview (3-column layout)
- Component specifications (Navbar, Sidebar, Content, TOC, Footer)
- Color palette (7 primary colors)
- Typography system (Manrope + Inter)
- Spacing system (12+ standardized values)
- Border radius and shadows
- Responsive breakpoints (5 tiers)
- Complete implementation checklist

**Key Sections:**

```
1. Architectural Position
2. Standard Design Components
3. Color Palette System
4. Typography System
5. Spacing System
6. Responsive Design Rules
7. Interactive States
8. Material Design Icons
9. Dark Mode Implementation
10. Template Implementation Checklist
```

---

#### 2. **TEMPLATE_REUSABLE.html**

**Status:** ✅ Production ready
**Purpose:** Copy-paste HTML code
**Contains:**

- Complete working HTML structure
- Tailwind CSS configuration (inline)
- All components implemented:
  - Top Navigation Bar (fixed, responsive)
  - Left Sidebar (sticky, collapsible)
  - Main Content Area (flexible width)
  - Right TOC Sidebar (xl screens only)
  - Footer (grid layout)
- Dark Mode support
- Material Symbols integration
- Examples of all component types

**Copy directly to start new page:**

```bash
cp TEMPLATE_REUSABLE.html pages/my-documentation.html
# Edit title, content, sections
# Test in browser
```

---

#### 3. **TEMPLATE_USAGE_GUIDE.md**

**Status:** ✅ Implementation reference
**Purpose:** How-to guide with practical examples
**Contains:**

- Layout architecture explained
- Grid system overview
- Component usage patterns:
  - Page headers (3 variants)
  - Sections (with/without badges)
  - Cards (requirements, info, warnings)
  - Code blocks (Python, JSON, YAML)
  - Callouts (info, warning, best practice)
  - Grid layouts (2-column, 3-column)
- Responsive techniques
- Color usage guidelines
- Typography rules
- Dark Mode implementation
- Performance standards
- Accessibility checklist

---

#### 4. **COMPONENT_EXAMPLES.md**

**Status:** ✅ Reference library
**Purpose:** 50+ ready-to-use code examples
**Contains:**

- Header examples (5 variants)
- Section variations
- Card component examples:
  - Requirements cards (2 versions)
  - Code blocks (Python, JSON/YAML)
  - Info callouts (implementation, best practice)
  - Warning callouts (compliance, audit trail)
- Grid layouts (3-column features, 2-column content+image)
- Full page example (Git Governance Policy)
- Copy-paste templates
- Usage notes (DOs and DON'Ts)

**Quick template lookup:**

```bash
grep -i "requirements\|callout\|code block" COMPONENT_EXAMPLES.md
```

---

#### 5. **DESIGN_SYSTEM.md**

**Status:** ✅ Visual specifications
**Purpose:** Precise reference for all design elements
**Contains:**

**Color Palette:**

- Primary Blue (#465f88) and variants
- Surface colors (7 levels)
- Text colors (primary, secondary, tertiary)
- Status colors (error, warning, success)
- Dark mode colors

**Typography:**

- Font stack (Manrope for headlines, Inter for body)
- Font weights (4: normal, medium, semibold, bold, extrabold)
- Sizing (9 levels: xs to 5xl)
- Tracking/letter spacing (5 levels)
- Line height guidelines

**Spacing System:**

- Vertical spacing (8px to 96px in multiples)
- Horizontal padding (16px to 80px)
- Gap values (8px to 24px)

**Components:**

- Navigation bar specifications
- Sidebar navigation specs
- Main content area specs
- Card components
- Badge/label styling
- Code blocks
- Buttons (primary, secondary, icon)

**Dark Mode:**

- Automatic dark mode implementation
- Color mappings for light/dark
- All components tested in both modes

**Accessibility:**

- WCAG AA contrast standards
- Focus states
- Touch target sizes (44x44px minimum)
- Keyboard navigation

---

### Navigation Files

#### 6. **README_TEMPLATE_SYSTEM_EN.md**

**Status:** ✅ System guide
**Purpose:** Navigation and overview
**Contains:**

- File mapping by importance
- Quick start for each role
- By-role usage guides
- File usage map
- Pre-publication checklist
- FAQ and troubleshooting
- Support and maintenance info

---

#### 7. **QUICK_START_GUIDE_EN.md**

**Status:** ✅ Quick reference
**Purpose:** 5-minute start guide
**Contains:**

- What's been accomplished
- Files ranked by importance
- 5-minute page creation
- Navigation by scenario
- Core components overview
- Content types (requirements, callouts, grids)
- Common customizations
- Learning paths for different roles
- Key features list

---

## SECTION 03 - Usage by Development Phase

### Phase 1: Understanding (1-2 hours)

1. Read: QUICK_START_GUIDE_EN.md (10 min)
2. Read: TEMPLATE_STANDARD.md (20 min)
3. Study: DESIGN_SYSTEM.md (20 min)
4. Review: COMPONENT_EXAMPLES.md (20 min)

### Phase 2: Implementation (30 minutes per page)

1. Copy: TEMPLATE_REUSABLE.html
2. Reference: COMPONENT_EXAMPLES.md
3. Customize: Content and sections
4. Test: Responsive + Dark Mode
5. Validate: Against TEMPLATE_STANDARD.md checklist

### Phase 3: Maintenance (Ongoing)

1. Reference: TEMPLATE_USAGE_GUIDE.md for issues
2. Update: Follow DESIGN_SYSTEM.md standards
3. Review: Quarterly (June, Sept, Dec)
4. Report: Issues via GitHub

---

## SECTION 04 - Template System Statistics

| Metric                     | Value                         | Reference               |
| -------------------------- | ----------------------------- | ----------------------- |
| Primary colors             | 7 distinct values             | DESIGN_SYSTEM.md §1     |
| Font sizes                 | 9 standardized sizes          | DESIGN_SYSTEM.md §2.4   |
| Spacing values             | 12+ consistent values         | DESIGN_SYSTEM.md §2     |
| Component examples         | 50+ ready templates           | COMPONENT_EXAMPLES.md   |
| Responsive breakpoints     | 5 tiers (sm, md, lg, xl, 2xl) | TEMPLATE_STANDARD.md §6 |
| Accessibility requirements | WCAG AA compliant             | DESIGN_SYSTEM.md §8     |
| Total documentation        | ~150 KB across 5 files        | All files               |

---

## SECTION 05 - File Cross-Reference Guide

### "I need to..."

| Task                         | Go To                   | Section             |
| ---------------------------- | ----------------------- | ------------------- |
| Understand overall structure | QUICK_START_GUIDE_EN.md | Core Components     |
| See all standards            | TEMPLATE_STANDARD.md    | All sections        |
| Get working HTML             | TEMPLATE_REUSABLE.html  | Entire file         |
| Find color hex codes         | DESIGN_SYSTEM.md        | Section 1           |
| Find font specifications     | DESIGN_SYSTEM.md        | Section 2           |
| Find spacing values          | DESIGN_SYSTEM.md        | Section 2           |
| See component examples       | COMPONENT_EXAMPLES.md   | All examples        |
| Learn how to use             | TEMPLATE_USAGE_GUIDE.md | All sections        |
| Get started quickly          | QUICK_START_GUIDE_EN.md | Get Started section |
| Check accessibility          | DESIGN_SYSTEM.md        | Section 8           |
| Troubleshoot issues          | TEMPLATE_USAGE_GUIDE.md | Section 9           |

---

## SECTION 06 - Customization Reference

### To Change Default Color

**File:** `TEMPLATE_REUSABLE.html`
**Find:** `tailwind.config` in `<head>`
**Edit:**

```javascript
colors: {
    "primary": "#YOUR_HEX_CODE",  // Change here
}
```

### To Change Font Family

**File:** `TEMPLATE_REUSABLE.html`
**Find:** `<link>` tags in `<head>`
**Edit:**

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

### To Change Content Padding

**File:** `TEMPLATE_REUSABLE.html`
**Find:** `<main class="flex-1 min-w-0..."`
**Edit:**

```html
<!-- Current -->
px-8 md:px-12 lg:px-20

<!-- Change to -->
px-6 md:px-10 lg:px-16
```

### To Add Custom Spacing

**Reference:** DESIGN_SYSTEM.md §2.1
**Use only pre-defined values:** py-2, py-4, py-6, py-8, py-12, mb-2, mb-4, mb-6, mb-8

---

## SECTION 07 - Quality Assurance Checklist

### Before Publishing ANY Page

```markdown
## SECTION 08 - Structure

- [ ] Page header includes breadcrumb navigation
- [ ] H1 title is present and uses correct styling
- [ ] Introduction paragraph exists
- [ ] All major sections have unique IDs

## SECTION 09 - Content

- [ ] All links point to internal/canonical URLs
- [ ] All images have descriptive alt text
- [ ] Code blocks properly formatted with language label
- [ ] Callouts use appropriate icon and border color
- [ ] No orphaned paragraphs or sections

## SECTION 10 - Responsive Design

- [ ] Mobile (<640px): Content readable, no horizontal overflow
- [ ] Tablet (768-1024px): Proper padding and spacing
- [ ] Desktop (1024-1280px): Sidebar visible and functional
- [ ] Wide (1280px+): TOC sidebar visible

## SECTION 11 - Visual Design

- [ ] All colors match defined palette
- [ ] Typography follows size hierarchy
- [ ] Spacing is consistent (use values from DESIGN_SYSTEM.md only)
- [ ] Dark mode tested and functional
- [ ] Icons render correctly

## SECTION 12 - Accessibility (WCAG AA)

- [ ] Text contrast ratio ≥ 4.5:1 for body text
- [ ] UI elements contrast ≥ 3:1
- [ ] Focus states visible (outline or ring)
- [ ] Touch targets ≥ 44x44px
- [ ] Keyboard navigation functional
- [ ] No reliance on color alone to convey info
```

---

## SECTION 08 - Documentation Standards

### For All Documentation Files

**Naming Convention:**

- English: `FILENAME_EN.md` or `FILENAME.md`
- Structure: Use clear hierarchical headings
- Language: Professional English throughout

**Content Structure:**

1. Clear title with context
2. Overview paragraph
3. Numbered sections with ### headings
4. Code examples in fenced blocks with language label
5. Tables for comparisons
6. Links to related sections
7. Final summary or next steps

**Code Examples:**

- Production-grade only
- Include language identifier
- Keep under 15 lines when possible
- Inline comments for clarity
- Show both input and output when applicable

---

## SECTION 09 - System Integration

### With Docusaurus

Template works directly with Docusaurus 3.9.2:

- Copy TEMPLATE_REUSABLE.html content to `.md` frontmatter + HTML
- Or convert to `.html` pages in `docs/` directory
- Tailwind classes render automatically
- Dark mode toggles via Docusaurus theme

### With Git Workflow

```bash
# 1. Create branch
git checkout -b docs/new-policy

# 2. Use template
cp TEMPLATE_REUSABLE.html my-policy.html

# 3. Validate
# - Test locally
# - Run checks
# - Review

# 4. Commit
git add my-policy.html
git commit -m "docs: Add policy documentation using template v2.0"

# 5. Push & PR
git push origin docs/new-policy
```

---

## SECTION 10 - Launch Checklist

Before going live:

```markdown
## SECTION 16 - Pre-Launch

- [ ] All template files present and readable
- [ ] All external links tested and working
- [ ] Fonts load correctly (Google Fonts CDN)
- [ ] Material Symbols icons render correctly
- [ ] Dark mode toggle functional
- [ ] Build passes without errors (npm run build)

## SECTION 17 - Testing

- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Responsive design tested on all breakpoints
- [ ] Mobile testing (iOS Safari, Chrome Android)
- [ ] Accessibility scan (aXe, WAVE, Lighthouse)
- [ ] Page load time < 4 seconds
- [ ] Lighthouse score ≥ 90 across all categories

## SECTION 18 - Monitoring

- [ ] Set up error tracking
- [ ] Monitor performance metrics
- [ ] Track user feedback
- [ ] Schedule quarterly reviews
```

---

## SECTION 11 - Support & Maintenance

### Getting Help

1. Search TEMPLATE_USAGE_GUIDE.md for your issue
2. Check COMPONENT_EXAMPLES.md for similar case
3. Review DESIGN_SYSTEM.md for specifications
4. Open GitHub issue if not found

### Reporting Issues

Provide:

- Page URL
- Browser and OS
- Screenshot or screen recording
- Steps to reproduce
- Expected vs. actual behavior

### Contributing

Submit PR with:

- Clear description of changes
- Links to related issues
- Testing evidence
- Before/after comparison

---

## SECTION 12 - Learning Resources

### Quick Reference

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Material Symbols](https://fonts.google.com/icons)
- [WCAG Guidelines](https://w3c.github.io/wcag/)
- [Docusaurus Docs](https://docusaurus.io)

### Best Practices

- Color accessibility: Check contrast
- Typography: Use hierarchy consistently
- Spacing: Use multiples of 4px or 8px
- Responsive: Test at every breakpoint
- Dark mode: Mirror light mode in appearance

---

## SECTION 13 - Version History

| Version | Date         | Changes                                              | Authority          |
| ------- | ------------ | ---------------------------------------------------- | ------------------ |
| 2.0     | Mar 26, 2026 | Complete system launch, all documentation in English | EATGF Design Board |
| 1.0     | Q1 2026      | Initial template framework                           | EATGF Design Board |

---

## SECTION 14 - System Highlights

✨ **Professional Grade** - Production-ready, tested, documented
✨ **Language Unified** - Complete English throughout (programs, styles, comments)
✨ **Standards-Based** - WCAG AA, Tailwind v3+, Material Design
✨ **Copy-Ready** - Templates designed for immediate use
✨ **Future-Proof** - Quarterly review schedule, version control
✨ **Well-Documented** - 150+ KB of comprehensive documentation
✨ **Accessible** - Full accessibility support and guidelines

---

## SECTION 15 - Next Actions

### Immediate (Today)

1. ☑ Review QUICK_START_GUIDE_EN.md
2. ☑ Open TEMPLATE_REUSABLE.html in browser
3. ☑ Read TEMPLATE_STANDARD.md Overview

### Short Term (This Week)

1. ☑ Study DESIGN_SYSTEM.md completely
2. ☑ Review COMPONENT_EXAMPLES.md thoroughly
3. ☑ Create first page using template

### Ongoing (Each Page)

1. ☑ Use TEMPLATE_REUSABLE.html as base
2. ☑ Follow DESIGN_SYSTEM.md standards
3. ☑ Validate against checklist
4. ☑ Test on all devices

---

## SECTION 16 - Governance

**Template Authority:** EATGF Design & Documentation Standards
**Maintained By:** EATGF Design Team
**Review Cycle:** Quarterly (June, September, December)
**Current Version:** 2.0
**Next Review:** June 2026

---

**Status:** ✅ COMPLETE AND READY FOR USE
**Language:** 100% English (Professional)
**Quality:** Production-Grade
**Last Updated:** March 26, 2026

---

### 🚀 Ready to Build? Start with TEMPLATE_REUSABLE.html
