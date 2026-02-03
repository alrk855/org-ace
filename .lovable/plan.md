

# Plan: Create DESIGN-DOCUMENTATION.md - Comprehensive Visual Design Guide

## Overview
This document will be created as `DESIGN-DOCUMENTATION.md` in the project root. It will serve as a complete visual encyclopedia of the COGNITA website, describing every section, color, font, component, and interactive element in detail - specifically designed for someone who cannot see the website.

---

## Document Structure

### 1. Introduction and Brand Identity
- **Organization Name**: COGNITA (English) / КОГНИТА (Macedonian)
- **Logo**: A panda character inside a perfect white circle, zoomed in at 140% scale for prominence
- **Brand Message**: "Building learning through play" - an educational non-profit organization

---

### 2. Color Palette - Complete Breakdown

**Light Mode Colors:**

| Color Name | HSL Value | Hex Equivalent | Usage |
|------------|-----------|----------------|-------|
| Primary Purple | 262, 35%, 45% | #52489C | Main buttons, links, headings, icons |
| Secondary Blue | 220, 49%, 50% | #4062BB | Accent elements, secondary buttons |
| Accent Cyan | 178, 100%, 85% | #B3FFFC | Call-to-action buttons, highlights |
| Background | 0, 0%, 100% | #FFFFFF | Page backgrounds |
| Foreground | 262, 35%, 30% | Deep purple-gray | Body text |
| Muted | 210, 40%, 96.1% | Light gray | Subtle backgrounds |
| Muted Foreground | 215.4, 16.3%, 46.9% | Medium gray | Secondary text |
| Top Strip | 262, 40%, 28% | Dark purple | Top contact bar |
| Footer Footnote | 262, 38%, 32% | Deep purple | Footer bottom bar |

**Dark Mode Colors:**
- Background: 262, 40%, 8% (very dark purple)
- Card: 262, 40%, 12% (dark purple)
- Primary: 262, 35%, 55% (lighter purple)
- Accent: 178, 100%, 75% (brighter cyan)

**Gradients:**
- **Primary Gradient**: 135-degree diagonal from Primary Purple to Secondary Blue
- **Accent Gradient**: 135-degree diagonal from Secondary Blue to Accent Cyan
- **Dark Gradient**: 135-degree diagonal from deep purple to deep blue
- **Navbar Gradient**: Custom gradient from #201f43 to #3a3870 (dark navy-purple)

---

### 3. Typography System

**Font Families:**
| Font Name | Purpose | Weight |
|-----------|---------|--------|
| Manrope | Body text, general content | Regular (400), Semibold (600) |
| Poppins | Navigation items | Bold (700) |
| Knewave | English logo text "COGNITA" | Regular |
| Lobster | Macedonian logo text "КОГНИТА" | Regular |

**Text Sizes:**
- Hero Title: 4xl (2.25rem) mobile, 6xl (3.75rem) tablet, 7xl (4.5rem) desktop
- Section Headings: 3xl (1.875rem) to 4xl (2.25rem)
- Page Titles: 4xl to 5xl (3rem)
- Card Titles: xl (1.25rem) to 2xl (1.5rem)
- Body Text: base (1rem)
- Small/Meta Text: sm (0.875rem)

---

### 4. Layout Architecture

**Global Layout Structure:**
```
+--------------------------------------------------+
|                   TOP STRIP (fixed)               | 42px height
+--------------------------------------------------+
|                   HEADER/NAVBAR (fixed)           | 112px height (h-28)
+--------------------------------------------------+
|                                                   |
|                   MAIN CONTENT                    | Variable
|                   (pt-162px top padding)          |
|                                                   |
+--------------------------------------------------+
|                      FOOTER                       |
+--------------------------------------------------+
```

**Container:**
- Maximum width: 1400px (2xl breakpoint)
- Horizontal padding: 2rem (32px)
- Centered on page

---

### 5. Component-by-Component Description

#### TOP STRIP
- **Position**: Fixed at very top of viewport (z-index: 50)
- **Height**: ~42px
- **Background**: Dark purple (--top-strip-bg)
- **Content - Left Side**: Phone number with phone icon, email with mail icon
- **Content - Right Side**: Four social media icons (Facebook, Twitter, Instagram, LinkedIn) in circular bordered containers (30% white border)
- **Hover Effects**: Icons glow with accent color on hover

#### NAVIGATION BAR (Header)
- **Position**: Fixed, sits directly below top strip (top: 42px, z-index: 40)
- **Height**: 112px (h-28)
- **Background**: Custom gradient from #201f43 to #3a3870 (dark navy-purple)
- **Hide/Show Behavior**: Hides when scrolling down, reappears when scrolling up

**Logo Section (Left):**
- Panda logo in a 64px white circular container
- Logo image scaled up 140% (scale-[1.4])
- Organization name "COGNITA" or "КОГНИТА" in ice-blue color (#d1e1ea)
- Font: Knewave (English) or Lobster (Macedonian), 3xl size (1.875rem)

**Navigation Items (Center-Right):**
- Font: Poppins Bold
- Items: Welcome (dropdown), About (dropdown), Projects (dropdown), News, Donate
- Dropdowns appear on hover with smooth slide-down animation
- Donate button highlighted with accent cyan background

**Language Switcher (Far Right):**
- Container: Transparent box with thin white borders (30% opacity), rounded corners
- Two buttons: "EN" and "MK"
- Active language has a sliding white background highlight (20% opacity)
- Smooth 500ms sliding animation when switching languages

#### HERO SECTION
- **Height**: Full viewport height (100vh)
- **Position**: Negative top margin (-162px) to overlap behind header
- **Background**: Multi-layered animated design:
  - Base gradient: purple-900 via indigo-800 to cyan-500 (diagonal)
  - Four floating "blob" circles with blur-3xl effect
    - Purple blob: 500px, 40% opacity, top-left
    - Pink blob: 450px, 30% opacity, top-right
    - Cyan blob: 520px, 25% opacity, bottom-center
    - Yellow blob: 400px, 20% opacity, center
  - Blobs animate continuously (7-second cycle) with subtle movement and scale changes
  - Semi-transparent overlay gradient from top to bottom

**Content:**
- Centered horizontally and vertically
- Typewriter animation effect for hero text
- Text appears letter by letter (80ms per character)
- English: "Welcome - Building learning through play."
- Macedonian: "Добредојде - Градиме учење преку игра."
- Font: Bold, white, responsive sizing (4xl/6xl/7xl)

#### WHO WE ARE SECTION
- **Background**: Subtle gradient from white to muted/20% (barely visible gray)
- **Padding**: 80px vertical, 16px horizontal

**Content Structure:**
- Centered title "Who We Are" (3xl-4xl, bold)
- Description paragraph (muted foreground color)
- Three statistic cards in a row (single column on mobile)

**Statistics Cards:**
- Background: White (card background)
- Border radius: 14px
- Shadow: Soft purple shadow (--shadow-soft)
- Padding: 32px
- Each card contains:
  - Circular icon container (64px): Target, Users, or Heart icon
  - Animated number counter (rolls up from 0 when scrolling into view)
  - Label text (muted foreground)
- **Numbers**: 15+ (Active Projects), 2000+ (Children Reached), 50+ (Volunteers)
- **Animation**: Numbers count up over 2 seconds when section enters viewport (30% visible)
- **Hover**: Shadow intensifies, icon background fills with primary color

#### NEWS CAROUSEL SECTION
- **Background**: muted/30% (light gray tint)
- **Padding**: 80px vertical

**Structure:**
- Section title "Latest News" centered
- Horizontal carousel showing 3 cards at once (1 on mobile)
- Navigation arrows on left and right edges
- Dot indicators below

**News Cards:**
- Border radius: 14px
- Aspect ratio: 16:9 image on top
- Image hover: 105% scale zoom
- Date in primary purple color
- Title bold, 1.125rem
- Card lifts up (-1px translateY) on hover

**Navigation Arrows:**
- Width: 8px (very thin)
- Full height of carousel
- Background: 80% opaque white
- Positioned flush to carousel edges
- Chevron icons in primary color

**Auto-play:**
- Advances every 4 seconds
- Pauses on manual interaction

#### SPONSORS MARQUEE SECTION
- **Background**: Gradient from muted/20% to background (subtle fade)
- **Padding**: 64px vertical

**Content:**
- Centered title "Our Partners & Sponsors"
- Subtitle text
- "Get in Touch" button (primary colored)
- Infinite scrolling marquee of sponsor cards

**Marquee:**
- Continuous left-to-right scroll
- Animation duration: 30 seconds per cycle
- Pauses on hover
- Sponsor cards: 192px wide, 128px tall
- Each card has circular logo placeholder (96px)
- Hover: Logo background fills with primary color, text goes white

#### DONATE CALL-TO-ACTION SECTION
- **Background**: Primary gradient (purple to blue diagonal)
- **Text**: White
- **Padding**: 80px vertical

**Content:**
- Large heart icon in semi-transparent white circle (80px container, 40px icon)
- Bold title "Support Our Mission"
- Description paragraph (90% white opacity)
- "Donate Now" button:
  - Background: Accent cyan
  - Text: Dark accent foreground
  - Border radius: 14px
  - Large padding (32px horizontal, 24px vertical)
  - Enhanced shadow

#### FOOTER
- **Background**: Primary purple (solid)
- **Text**: White

**Three-Column Layout:**

| Column 1: Branding | Column 2: Contact | Column 3: Newsletter |
|--------------------|-------------------|---------------------|
| Logo (56px circle) | Phone with icon | Title "Newsletter" |
| "COGNITA" name | Email with icon | Description |
| About text | Address with icon | Email input field |
| Social icons row | | Checkbox + consent text |
| | | Subscribe button |

**Newsletter Checkbox:**
- 2px white border
- Checked state: Accent cyan background with accent border
- Label: White text, cursor pointer

**Footer Footnote Bar:**
- Background: Slightly darker purple (--footer-footnote)
- Centered copyright text: "© 2025 COGNITA — All rights reserved."

---

### 6. Interior Pages

#### ABOUT PAGE
- Header/footer structure same as homepage
- White background main content
- Three value cards (Mission, Vision, Values) in grid
- "Our Story" section with muted background (muted/30%)

#### TEAM PAGE
- 6 team member cards in 3-column grid
- Each card: Square photo, name, role (primary color), bio, contact icons
- Photos zoom on hover (105% scale)

#### NEWS PAGE
- Grid of article cards (3 columns desktop)
- Each card: Image, category pill (primary/10% background), date, title, excerpt, "Read more" link

#### PARTNERS PAGE
- Partner cards with large circular logo placeholders
- "Become a Partner" call-to-action section with muted background

#### CONTACT PAGE
- Two-column layout:
  - Left: Contact form (name, email, subject, message inputs + submit button)
  - Right: Contact info cards + embedded Google Map
- "Already subscribed?" link to unsubscribe page

#### DONATE PAGE
- Two-column layout:
  - Left: Donation configuration (frequency toggle, amount buttons, payment methods)
  - Right: Impact card showing what each amount provides
- Selection states: Purple border + light purple background

#### UNSUBSCRIBE PAGE
- Centered card layout
- Email icon in muted circular container
- Simple email input form

---

### 7. Interactive Behaviors and Animations

**Button Hover States:**
- Primary buttons: Darken by 5% lightness
- Accent buttons: Darken by 5% lightness
- Shadow intensifies from --shadow-soft to --shadow-hover

**Card Hover Effects:**
- Shadow transitions from soft to hover (more pronounced)
- 300ms transition duration
- Some cards lift up slightly (transform: translateY(-1px))

**Navigation Dropdowns:**
- Slide-down animation (0.3s ease-out)
- Fade in from 0 to 100% opacity
- Translate from -10px to 0

**Language Switcher:**
- 500ms sliding animation for background highlight
- Smooth transition between EN and MK

**Number Counter Animation:**
- Triggers when section is 30% visible in viewport
- 2 seconds duration
- 60 steps (interpolated values)
- Resets and re-animates on language change

**Hero Typewriter:**
- Characters appear one by one
- 80ms delay between each character
- Restarts when language changes

**Blob Background Animation:**
- 7-second infinite cycle
- Keyframes: translate and scale variations
- Staggered delays: 0s, 2s, 3s, 4s for different blobs

---

### 8. Shadows and Elevations

| Shadow Name | Value | Usage |
|-------------|-------|-------|
| shadow-soft | 0 4px 20px -4px (primary/15%) | Default cards, buttons |
| shadow-hover | 0 8px 30px -4px (primary/25%) | Hover state for cards |

---

### 9. Border Radius System

| Size | Value | Usage |
|------|-------|-------|
| lg | 14px (--radius) | Cards, buttons, input fields |
| md | 12px | Smaller elements |
| sm | 10px | Smallest elements |
| full | 50% | Circular elements (logos, icons) |

---

### 10. Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Mobile | < 768px | Single column, hamburger menu, smaller text |
| Tablet (md) | 768px+ | 2-column grids, larger spacing |
| Desktop (lg) | 1024px+ | Full navigation, 3-column grids |
| Wide (2xl) | 1400px | Maximum container width |

---

### 11. Bilingual Support

All text content switches between English and Macedonian:
- Navigation labels
- Section titles and descriptions
- Button text
- Form labels and placeholders
- Footer content

Language switch happens instantly without page reload (React state change).

---

## Technical Notes

### Files to Create

**File**: `DESIGN-DOCUMENTATION.md`  
**Location**: Project root  
**Format**: Markdown with tables, ASCII diagrams, and detailed descriptions

This documentation will be approximately 1000+ lines long, providing exhaustive detail for accessibility and design reference purposes.

