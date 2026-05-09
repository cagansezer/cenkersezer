---
name: Quiet Luxury Industrial
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#755a22'
  on-secondary: '#ffffff'
  secondary-container: '#fdd893'
  on-secondary-container: '#785d24'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e5c27f'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5b430b'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
  section-gap: 160px
---

## Brand & Style

This design system is built on the principles of "Quiet Luxury"—an aesthetic that prioritizes substance, material honesty, and restrained elegance over loud ornamentation. The brand personality is architectural, precise, and authoritative, reflecting the meticulous nature of industrial design.

The design style is **Minimalism** with a focus on structural integrity. It avoids trendy embellishments in favor of generous whitespace, allowing the portfolio pieces to breathe as if they were physical objects in a high-end gallery. The emotional response should be one of calm sophistication, where the user feels they are engaging with a master of their craft. Every element exists with purpose, mirroring the "form follows function" ethos of Cenker Sezer’s work.

## Colors

The palette is rooted in a timeless, high-contrast relationship between light and shadow. 

- **Primary (Deep Charcoal):** Used for primary text and structural elements. It provides the "weight" and "ink" of the design system.
- **Secondary (Muted Gold):** Reserved for moments of quiet emphasis—active states, subtle accents, or thin hairline dividers. It should be used sparingly to maintain its premium feel.
- **Tertiary (Warm Off-White):** The primary canvas color. Unlike a sterile pure white, this warm tone evokes high-quality paper or gallery walls.
- **Neutral:** A range of mid-tone grays used for metadata and technical descriptions, ensuring a clear hierarchy between the "art" and the "info."

The default mode is light, emphasizing the architectural "openness" of the space.

## Typography

This design system utilizes a sophisticated typographic pairing to balance heritage with technical precision. 

**Noto Serif** is used for headlines and display text. Its refined serifs and classical proportions communicate the "luxury" aspect of the brand, suggesting a history of craftsmanship. 

**Space Grotesk** serves as the technical counterpoint. Used for body text, labels, and technical specifications, its geometric and slightly futuristic apertures reflect the industrial engineering side of the portfolio. 

For maximum impact, use `label-caps` for section headers or project metadata to provide an "architectural blueprint" feel to the layout. Letter spacing should be tight for large serif headlines and intentionally tracked out for small sans-serif labels.

## Layout & Spacing

The layout follows a **Fixed Grid** model to ensure rigorous alignment and a sense of architectural permanence. A 12-column grid is used with generous 32px gutters, providing a sturdy framework for varying content widths.

Spacing is the most critical "material" in this design system. Rather than filling the screen, elements are placed like pieces in a gallery. 

- **Intentional Voids:** Use the `section-gap` (160px) to separate different projects or major content blocks. 
- **Asymmetry:** Don't feel obligated to fill every column; using 8 of 12 columns for text while leaving the remainder empty creates a more sophisticated, editorial feel.
- **Margins:** Large 64px outer margins act as a frame, containing the work and separating it from the browser chrome.

## Elevation & Depth

To maintain a "Quiet Luxury" aesthetic, this design system avoids heavy drop shadows or aggressive depth effects. Hierarchy is instead established through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use subtle shifts between the warm off-white and a slightly darker "bone" color to define content areas.
- **Dividers:** Use 1px hairlines in Muted Gold or light charcoal to separate technical data. These lines should feel like precision-machined edges.
- **Imagery:** Depth should come from the photography of the industrial design work itself. UI elements should remain mostly flat to ensure they do not compete with the 3D nature of the showcased products.
- **Interactive Depth:** On hover, a very soft, diffused ambient shadow (5% opacity charcoal) may be used to indicate a "lifted" state for clickable project cards.

## Shapes

The shape language of this design system is **Sharp (0)**. 

In industrial design, a sharp 90-degree angle represents precision and deliberate intent. By using 0px border radii for buttons, input fields, and image containers, the UI takes on a structural, architectural quality. This rigidity provides a beautiful contrast when showcasing industrial products that may have organic, ergonomic curves. The UI acts as the "drafting table" upon which the work is presented.

## Components

### Buttons
Buttons are strictly rectangular with no border-radius. 
- **Primary:** Deep Charcoal background with Warm Off-White text. 
- **Secondary (Ghost):** Muted Gold 1px border with Muted Gold text. On hover, the button fills with a very faint gold tint (5% opacity).

### Project Cards
Cards should be borderless. The image should be the hero, followed by a `label-caps` category and a `headline-md` title. There is no background color for the card; it sits directly on the Tertiary canvas.

### Input Fields
Inputs are defined by a single 1px bottom border in Deep Charcoal. Labels use `label-caps` and sit above the line. This mimics the look of a professional design brief or technical drawing.

### Chips / Tags
Small, rectangular boxes with a 1px charcoal border. Use `label-caps` typography. They should look like physical labels found in a workshop or archive.

### Navigation
The navigation should be minimal. A simple text-based logo on the left and 3-4 menu items on the right using `label-caps`. Use a "hairline" divider to separate the header from the main content, but only if the content is scrolling.

### Additional Components: Technical Spec List
A two-column list for product details (e.g., "Material", "Dimensions"). The left column is `label-caps` in Muted Gold, and the right column is `body-md` in Deep Charcoal. This reinforces the technical nature of industrial design.