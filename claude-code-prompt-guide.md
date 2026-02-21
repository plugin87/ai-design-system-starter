# Quick Reference: How to Use This Prompt with Claude Code

## When You Have Your Figma File Ready

### Copy-Paste Prompt for Claude Code:

```
[ใส่ลิงก์ Figma File หรือข้อมูล Variables ตรงนี้]

Based on the Figma design system with these variables, generate production-ready Design Tokens that:

1. **Preserve Shadcn/ui Components Integrity**: Never modify Shadcn component HTML structure or core logic. Only extend via CSS custom properties.

2. **Exact Value Mapping**: Extract all Figma variables and convert them to semantic CSS custom properties with exact values (no approximations).

3. **Follow This Structure**:
   - Global CSS custom properties in `:root`
   - Semantic naming: `--component-element-state-property`
   - Component-specific overrides using `:where()` selector
   - Complete state coverage (default, hover, active, disabled, focus, error)

4. **TypeScript Definitions**: Create fully-typed token objects that match CSS variables, organized by category (colors, typography, spacing, effects).

5. **Shadcn/ui Component Compatibility**:
   - Extend only exposed CSS variables
   - Maintain all component states (normal, hover, active, disabled, focus-visible)
   - Keep Radix UI primitives untouched
   - Follow Shadcn naming patterns (primary, secondary, accent, destructive, muted, foreground, background)

6. **Output Requirements**:
   - design-tokens.css (global CSS variables)
   - colors.ts (color token object)
   - typography.ts (typography tokens)
   - spacing.ts (spacing tokens)
   - effects.ts (shadows, borders, animations)
   - components.ts (component-specific tokens)
   - shadcn-overrides.css (component CSS overrides)
   - Token validation report (verify all values match Figma exactly)

7. **Quality Assurance**:
   - Verify no Shadcn component structure is altered
   - Confirm all Figma variables are captured with exact values
   - Check accessibility compliance (WCAG AA contrast minimum)
   - Validate CSS variable inheritance
   - Test type safety of TypeScript definitions

8. **Documentation**: Include usage examples for each token group and accessibility notes where relevant.

DO NOT: Skip any token mapping, approximate values, alter Shadcn component structure, or use generic naming. MUST: Follow semantic naming, preserve Shadcn integrity, match Figma values exactly, and provide complete type definitions.
```

---

## File Templates to Reference

When pasting into Claude Code, you can provide context by including:

### A. Raw Figma Variable Export
```
Figma Variable Groups:
- Colors/
  - Primary/default: #1F2937
  - Primary/hover: #1E40AF
  - Primary/active: #1832A0
  - Secondary/default: #7C3AED
  ...

- Typography/
  - Font Family: "Inter"
  - Font Sizes: 12px, 14px, 16px, 18px, 20px, 24px, 32px
  - Line Heights: 1.25, 1.5, 1.75
  - Font Weights: 400, 500, 600, 700
  ...

- Spacing/
  - Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
  ...

- Effects/
  - Shadows: Shadow-xs, Shadow-sm, Shadow-md, Shadow-lg
  ...
```

### B. Figma File Link
```
Import these Design Tokens from Figma file:
[Your Figma File Link]

Token Collections/Modes:
- Default (light mode)
- Dark (dark mode if available)
```

### C. Component Requirements
```
These Shadcn/ui components must maintain full compatibility:
- Button (all variants)
- Input (text, email, password, etc.)
- Card
- Modal/Dialog
- Select/Dropdown
- Tabs
- Badge
- [Add other components you're using]
```

---

## Expected Outputs

The Claude Code should generate:

```
src/tokens/
├── design-tokens.css          ✓ All CSS variables with exact values
├── colors.ts                   ✓ Typed color objects
├── typography.ts               ✓ Typography scale tokens
├── spacing.ts                  ✓ Spacing scale tokens
├── effects.ts                  ✓ Shadows, borders, animations
├── components.ts               ✓ Component-specific tokens
└── index.ts                    ✓ Complete export file

src/styles/
├── globals.css                 ✓ :root CSS variable application
├── shadcn-overrides.css        ✓ Component CSS overrides
└── [any additional styles]

docs/
├── TOKEN-USAGE-GUIDE.md        ✓ Token usage documentation
├── COMPONENT-REFERENCE.md      ✓ Which tokens apply to which components
├── ACCESSIBILITY.md            ✓ Contrast compliance report
└── VALIDATION-REPORT.md        ✓ Token value verification
```

---

## Key Validation Checklist

Before accepting the output, verify:

- ✅ Every Figma variable has a corresponding CSS custom property
- ✅ All values match Figma exactly (no rounding or approximation)
- ✅ Component state tokens exist for all states (default, hover, active, disabled, focus)
- ✅ No Shadcn/ui component HTML was modified
- ✅ CSS custom properties follow naming convention consistently
- ✅ TypeScript types are complete and accurate
- ✅ Dark mode works if specified in Figma
- ✅ Color contrast meets WCAG AA minimum
- ✅ All exports are available in index.ts
- ✅ Documentation explains usage for each token group

---

## Tone & Communication

When working with Claude Code:
- Be specific about which Figma variables to extract
- Clearly state which Shadcn components are in use
- Provide the exact values from Figma (don't make Claude guess)
- Request specific output format (CSS, TypeScript, documentation)
- Ask for validation report to confirm Figma-to-CSS mapping accuracy
- Request accessibility compliance report
- Ask for implementation examples if needed

---

## Common Issues to Prevent

### ❌ Don't Do:
- "Generate design tokens" without providing Figma data
- Approximate color values (use exact hex/HSL from Figma)
- Skip any component states
- Use numeric naming instead of semantic naming
- Forget dark mode if Figma includes it
- Skip TypeScript definitions

### ✅ Do:
- Provide complete Figma variable export
- Request exact value mapping
- Specify which Shadcn components are in use
- Ask for component-specific overrides
- Request comprehensive documentation
- Ask for validation/verification report
- Request accessibility compliance check

---

## Example: Complete Prompt for Claude Code

```
I have a Figma design system with these variables:

[Paste your Figma variables here or link]

Please generate Design Tokens for Shadcn/ui with these specifications:

**Non-Negotiable Requirements:**
1. Every Figma variable must map to a CSS custom property with EXACT values
2. All Shadcn/ui component structures remain unchanged - only CSS variables extended
3. Complete state coverage: default, hover, active, disabled, focus, error
4. Semantic naming: --component-element-state-property
5. TypeScript definitions fully typed and exported

**Output Files:**
1. src/tokens/design-tokens.css - Global CSS variables
2. src/tokens/colors.ts - Color token object
3. src/tokens/typography.ts - Typography tokens
4. src/tokens/spacing.ts - Spacing tokens
5. src/tokens/effects.ts - Shadows and effects
6. src/tokens/components.ts - Component-specific tokens
7. src/tokens/index.ts - Complete exports
8. src/styles/shadcn-overrides.css - Component CSS overrides
9. docs/VALIDATION-REPORT.md - Verify all values match Figma
10. docs/TOKEN-USAGE-GUIDE.md - Complete documentation

**Include in validation report:**
- Confirm all Figma variables captured
- Verify exact value mapping
- Check WCAG AA color contrast compliance
- Validate no Shadcn structure changes
- Confirm TypeScript type accuracy

Please proceed step-by-step and confirm completion of each phase.
```

---

## Pro Tips

1. **For Large Design Systems**: Request token generation in phases (colors first, then typography, then spacing)
2. **For Dark Mode**: Specify separate token groups for light and dark modes
3. **For Component-Specific Tokens**: List the Shadcn components you use to get targeted overrides
4. **For Accessibility**: Always request a contrast compliance report
5. **For Documentation**: Ask for usage examples for each token group
6. **For Updates**: Keep the prompt handy for regenerating tokens when Figma design system updates

