# COGNITA Website - Complete Visual Design Documentation

> **Purpose**: This document provides an exhaustive visual description of the COGNITA website for accessibility, design reference, and documentation purposes. It describes every visual element, color, animation, and interactive behavior in detail.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography System](#3-typography-system)
4. [Layout Architecture](#4-layout-architecture)
5. [Homepage Components](#5-homepage-components)
6. [Interior Pages](#6-interior-pages)
7. [Interactive Behaviors & Animations](#7-interactive-behaviors--animations)
8. [Shadows & Elevations](#8-shadows--elevations)
9. [Border Radius System](#9-border-radius-system)
10. [Responsive Design](#10-responsive-design)
11. [Bilingual Support](#11-bilingual-support)

---

## 1. Brand Identity

### Organization Name
- **English**: COGNITA
- **Macedonian**: КОГНИТА

### Logo
- **Image**: A panda character illustration
- **Container**: Perfect white circle (64 pixels diameter)
- **Scale**: The panda image is zoomed in at 140% scale for prominence
- **Appearance**: The panda fills most of the circular frame, creating a friendly, approachable mascot

### Brand Message
- **English**: "Building learning through play"
- **Macedonian**: "Градиме учење преку игра"

### Organization Type
Educational non-profit organization focused on children's learning through playful methods.

---

## 2. Color Palette

### Light Mode Colors

| Color Name | HSL Value | Hex Equivalent | Visual Description | Usage |
|------------|-----------|----------------|-------------------|-------|
| **Primary Purple** | 262, 35%, 45% | #52489C | A medium-dark purple with slight blue undertones | Main buttons, links, headings, icons, primary actions |
| **Secondary Blue** | 220, 49%, 50% | #4062BB | A rich royal blue | Accent elements, secondary buttons, gradients |
| **Accent Cyan** | 178, 100%, 85% | #B3FFFC | A very light, almost pastel turquoise/aqua | Call-to-action buttons, highlights, emphasis |
| **Background** | 0, 0%, 100% | #FFFFFF | Pure white | Page backgrounds |
| **Foreground** | 262, 35%, 30% | Deep purple-gray | A dark purple-tinted gray | Body text, headings |
| **Muted** | 210, 40%, 96.1% | Very light gray | Almost white with a hint of blue | Subtle section backgrounds |
| **Muted Foreground** | 215.4, 16.3%, 46.9% | Medium gray | A neutral medium gray | Secondary text, labels |
| **Top Strip Background** | 262, 40%, 28% | Dark purple | A deep, dark purple | Top contact bar background |
| **Footer Footnote** | 262, 38%, 32% | Deep purple | Slightly lighter than top strip | Footer bottom bar |
| **Trust Blue** | 221, 83%, 53% | Bright blue | A vibrant, trustworthy blue | Payment-related elements |
| **Trust Green** | 142, 71%, 45% | Success green | A positive, reassuring green | Success states, confirmations |

### Dark Mode Colors

| Color Name | HSL Value | Visual Description |
|------------|-----------|-------------------|
| **Background** | 262, 40%, 8% | Very dark purple, almost black |
| **Card Background** | 262, 40%, 12% | Dark purple |
| **Primary Purple** | 262, 35%, 55% | Lighter purple for visibility |
| **Accent Cyan** | 178, 100%, 75% | Brighter cyan for contrast |
| **Muted** | 262, 30%, 20% | Dark muted purple |
| **Border** | 262, 30%, 18% | Subtle dark purple border |

### Gradients

| Gradient Name | Direction | Colors | Usage |
|---------------|-----------|--------|-------|
| **Primary Gradient** | 135° diagonal | Primary Purple → Secondary Blue | Hero sections, major CTAs |
| **Accent Gradient** | 135° diagonal | Secondary Blue → Accent Cyan | Accent elements |
| **Dark Gradient** | 135° diagonal | Deep purple (262, 40%, 25%) → Deep blue (220, 55%, 30%) | Dark themed sections |
| **Navbar Gradient** | Linear | #201f43 → #3a3870 | Navigation bar background |

---

## 3. Typography System

### Font Families

| Font Name | Purpose | Weights Used | Visual Character |
|-----------|---------|--------------|------------------|
| **Manrope** | Body text, general content | Regular (400), Semibold (600) | Modern, clean, highly readable sans-serif |
| **Poppins** | Navigation items | Bold (700) | Geometric, friendly sans-serif |
| **Knewave** | English logo text "COGNITA" | Regular | Playful, hand-drawn style, childlike |
| **Lobster** | Macedonian logo text "КОГНИТА" | Regular | Elegant script with playful curves |

### Text Size Scale

| Element | Mobile Size | Tablet Size | Desktop Size | Tailwind Class |
|---------|-------------|-------------|--------------|----------------|
| **Hero Title** | 2.25rem (36px) | 3.75rem (60px) | 4.5rem (72px) | text-4xl/6xl/7xl |
| **Section Headings** | 1.875rem (30px) | 2.25rem (36px) | 2.25rem (36px) | text-3xl/4xl |
| **Page Titles** | 2.25rem (36px) | 3rem (48px) | 3rem (48px) | text-4xl/5xl |
| **Card Titles** | 1.25rem (20px) | 1.5rem (24px) | 1.5rem (24px) | text-xl/2xl |
| **Body Text** | 1rem (16px) | 1rem (16px) | 1rem (16px) | text-base |
| **Small/Meta Text** | 0.875rem (14px) | 0.875rem (14px) | 0.875rem (14px) | text-sm |
| **Logo Text** | 1.875rem (30px) | 1.875rem (30px) | 1.875rem (30px) | text-3xl |

### Text Colors by Context

| Context | Color Used |
|---------|------------|
| Primary headings | Foreground (deep purple-gray) |
| Body text | Foreground (deep purple-gray) |
| Secondary text | Muted Foreground (medium gray) |
| Links | Primary Purple |
| Text on dark backgrounds | White |
| Text on accent backgrounds | Accent Foreground (dark) |

---

## 4. Layout Architecture

### Global Page Structure

```
┌──────────────────────────────────────────────────────────────┐
│                      TOP STRIP (Fixed)                        │
│  Height: 42px | Z-index: 50 | Dark purple background         │
│  [Phone Icon] +389 XX XXX XXX  [Mail Icon] info@cognita.org  │
│                                    [FB] [TW] [IG] [LI]       │
├──────────────────────────────────────────────────────────────┤
│                    NAVIGATION BAR (Fixed)                     │
│  Height: 112px (h-28) | Z-index: 40 | Gradient background    │
│  Position: 42px from top (below top strip)                   │
│                                                               │
│  [🐼 Logo] COGNITA    [Welcome▾] [About▾] [Projects▾]        │
│                       [News] [Donate]           [EN|MK]      │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│                                                               │
│                      MAIN CONTENT AREA                        │
│                                                               │
│               Top padding: 162px (to clear fixed headers)    │
│                                                               │
│                         (Variable height)                     │
│                                                               │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│                          FOOTER                               │
│  Background: Primary purple (solid)                          │
│  Three columns: Branding | Contact | Newsletter              │
│                                                               │
│  ─────────────────────────────────────────────────────────── │
│              Footer Footnote Bar (darker purple)              │
│           © 2025 COGNITA — All rights reserved.              │
└──────────────────────────────────────────────────────────────┘
```

### Container Specifications

| Property | Value | Description |
|----------|-------|-------------|
| **Maximum Width** | 1400px | Content never exceeds this width |
| **Horizontal Padding** | 32px (2rem) | Space on left and right edges |
| **Centering** | margin: 0 auto | Container is centered on page |
| **Breakpoint** | 2xl (1536px) | Full width below this |

### Fixed Elements

| Element | Position | Height | Z-Index |
|---------|----------|--------|---------|
| Top Strip | Fixed, top: 0 | 42px | 50 |
| Navigation Bar | Fixed, top: 42px | 112px | 40 |
| Total Fixed Height | — | 154px | — |
| Main Content Offset | padding-top | 162px | — |

---

## 5. Homepage Components

### 5.1 Top Strip

**Visual Description:**
A thin horizontal bar spanning the full width of the viewport, fixed at the very top of the screen. It remains visible even when scrolling.

**Specifications:**
- **Height**: Approximately 42 pixels
- **Background**: Dark purple (HSL 262, 40%, 28%)
- **Text Color**: White
- **Padding**: 10px vertical, 16px horizontal

**Left Side Content:**
- Phone icon (16x16 pixels) followed by phone number
- Mail icon (16x16 pixels) followed by email address
- Icons and text are white
- On mobile: Only icons are visible, text is hidden

**Right Side Content:**
- Four social media icons in a horizontal row
- Each icon sits inside a circular container:
  - Diameter: 32 pixels
  - Border: 1px solid white at 30% opacity
  - Background: Transparent
- Icons: Facebook, Twitter, Instagram, LinkedIn (each 16x16 pixels)

**Hover Behavior:**
- Icon containers gain a subtle accent color glow
- Border becomes accent colored
- Smooth 300ms transition

---

### 5.2 Navigation Bar (Header)

**Visual Description:**
A substantial navigation bar positioned directly below the top strip. It uses a dark navy-purple gradient and contains the logo, navigation items, and language switcher.

**Specifications:**
- **Height**: 112 pixels (Tailwind h-28)
- **Position**: Fixed, 42 pixels from top
- **Background**: Linear gradient from #201f43 (dark navy) to #3a3870 (purple-navy)
- **Z-index**: 40

**Hide/Show Behavior:**
- When user scrolls DOWN: Navbar slides up and hides
- When user scrolls UP: Navbar slides back into view
- Transition: Smooth 300ms animation

#### Logo Section (Left Side)

```
┌─────────────────────────────────────┐
│  ┌──────┐                           │
│  │  🐼  │  COGNITA                  │
│  │      │  (or КОГНИТА)             │
│  └──────┘                           │
└─────────────────────────────────────┘
```

- **Logo Container**: White circle, 64 pixels diameter
- **Logo Image**: Panda illustration, scaled at 140% (scale-[1.4])
- **Logo Overflow**: Hidden (circular crop)
- **Organization Name**: 
  - Font: Knewave (English) or Lobster (Macedonian)
  - Size: 1.875rem (30px)
  - Color: Ice blue (#d1e1ea)
  - Position: To the right of the logo circle
  - Gap: 16 pixels from logo

#### Navigation Items (Center-Right)

**Menu Structure:**
1. **Welcome** (dropdown)
   - Link to: Home page
   - Dropdown items: Home, Who We Are, Partners

2. **About** (dropdown)
   - Dropdown items: About COGNITA, Our Team, Documents

3. **Projects** (dropdown)
   - Dropdown items: Current Projects, Past Projects

4. **News** (single link)
   - Link to: News page

5. **Donate** (highlighted button)
   - Background: Accent cyan
   - Text: Dark (accent foreground)
   - Border radius: Standard (rounded-lg)

**Navigation Item Styling:**
- Font: Poppins Bold
- Color: White
- Hover: Text becomes accent cyan color
- Active/Current: Underline or accent color

**Dropdown Behavior:**
- Triggered on hover
- Animation: Slides down from -10px to 0
- Opacity: Fades from 0 to 100%
- Duration: 300ms
- Background: Semi-transparent dark
- Border radius: 14px
- Shadow: Soft shadow

#### Language Switcher (Far Right)

```
┌───────────────────┐
│  [EN]  │  [MK]   │
│   ▓▓▓  │         │  ← Sliding highlight on active
└───────────────────┘
```

**Container:**
- Background: Transparent
- Border: 1px solid white at 30% opacity
- Border radius: Rounded corners (8px)
- Padding: 4px

**Buttons:**
- Two buttons: "EN" and "MK"
- Font: Bold, uppercase
- Color: White

**Active State Animation:**
- A white background highlight (20% opacity) slides behind the active language
- Transition duration: 500ms
- Slides LEFT when switching to English
- Slides RIGHT when switching to Macedonian

---

### 5.3 Hero Section

**Visual Description:**
A dramatic full-screen section with an animated gradient background featuring floating, blurred color blobs. The hero text appears with a typewriter animation effect.

**Specifications:**
- **Height**: 100vh (full viewport height)
- **Position**: Negative top margin of -162px (overlaps behind fixed headers)
- **Content Alignment**: Centered both horizontally and vertically

#### Background Layers (Bottom to Top)

**Layer 1 - Base Gradient:**
- Direction: Diagonal (bottom-left to top-right)
- Colors: purple-900 → indigo-800 → cyan-500
- Creates a rich, deep purple to teal gradient

**Layer 2 - Animated Blobs:**
Four large, blurred circular shapes that float and animate:

| Blob | Size | Color | Opacity | Position | Animation Delay |
|------|------|-------|---------|----------|-----------------|
| 1 | 500px | Purple-600 | 40% | Top-left quarter | 0s |
| 2 | 450px | Pink-500 | 30% | Top-right quarter | 2s |
| 3 | 520px | Cyan-400 | 25% | Bottom-center | 4s |
| 4 | 400px | Yellow-300 | 20% | Center | 3s |

**Blob Animation:**
- Duration: 7 seconds per cycle
- Motion: Subtle translate and scale changes
- Keyframes:
  - 0%: Original position, scale 1.0
  - 33%: Translate 30px right, -50px up, scale 1.1
  - 66%: Translate -20px left, 20px down, scale 0.9
  - 100%: Back to original
- Blur: 48px (blur-3xl)

**Layer 3 - Overlay Gradient:**
- Semi-transparent gradient from top to bottom
- Adds depth and ensures text readability

#### Hero Content

**Text:**
- English: "Welcome - Building learning through play."
- Macedonian: "Добредојде - Градиме учење преку игра."

**Typography:**
- Font: Bold sans-serif
- Color: White
- Size: 4xl (mobile) → 6xl (tablet) → 7xl (desktop)
- Alignment: Centered
- Text balance: Applied for optimal line breaks

**Typewriter Animation:**
- Characters appear one by one
- Speed: 80 milliseconds per character
- Starts fresh when language is changed
- No cursor blink effect

---

### 5.4 Who We Are Section

**Visual Description:**
A clean section introducing the organization with three statistic cards featuring animated number counters.

**Specifications:**
- **Background**: Subtle gradient from white to muted/20%
- **Padding**: 80px vertical, 16px horizontal

#### Header Content

- **Title**: "Who We Are" / "Кои сме ние"
- **Title Style**: 3xl-4xl, bold, foreground color
- **Description**: Paragraph explaining the organization's mission
- **Description Style**: Large text (lg), muted foreground color
- **Max Width**: 768px (3xl), centered

#### Statistics Cards

Three cards displayed in a horizontal row (stacked on mobile):

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│       🎯        │  │       👥        │  │       ❤️        │
│                 │  │                 │  │                 │
│       15+       │  │     2000+       │  │       50+       │
│  Active Projects│  │ Children Reached│  │   Volunteers    │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

**Card Specifications:**
- Background: White (card background)
- Border radius: 14px
- Shadow: Soft shadow (--shadow-soft)
- Padding: 32px
- Text alignment: Centered

**Card Content (top to bottom):**
1. **Icon Container**:
   - Circular, 64px diameter
   - Background: Primary at 10% opacity
   - Icon: 32px, primary color
   - Icons used: Target, Users, Heart

2. **Number**:
   - Font size: 4xl (2.25rem)
   - Font weight: Bold
   - Color: Primary purple
   - Animated counter (see below)

3. **Label**:
   - Font size: Base
   - Color: Muted foreground

**Number Counter Animation:**
- Trigger: When section is 30% visible in viewport
- Duration: 2 seconds
- Steps: 60 interpolated values
- Effect: Numbers roll up from 0 to final value
- Resets when language changes

**Hover Effects:**
- Shadow intensifies to --shadow-hover
- Icon container fills with primary color
- Icon turns white (primary-foreground)
- Transition: 300ms

---

### 5.5 News Carousel Section

**Visual Description:**
A horizontal carousel displaying the latest news articles with navigation arrows and dot indicators.

**Specifications:**
- **Background**: Muted at 30% opacity
- **Padding**: 80px vertical

#### Section Header

- **Title**: "Latest News" / "Најнови вести"
- **Style**: 3xl-4xl, bold, centered

#### Carousel Structure

```
┌───────────────────────────────────────────────────────────────┐
│ ◀ │  ┌─────────┐  ┌─────────┐  ┌─────────┐  │ ▶ │
│   │  │ [Image] │  │ [Image] │  │ [Image] │  │   │
│   │  │ Date    │  │ Date    │  │ Date    │  │   │
│   │  │ Title   │  │ Title   │  │ Title   │  │   │
│   │  └─────────┘  └─────────┘  └─────────┘  │   │
└───────────────────────────────────────────────────────────────┘
                        ● ○ ○ ○
```

**Visible Cards:**
- Desktop: 3 cards visible
- Tablet: 2 cards visible
- Mobile: 1 card visible

**Navigation Arrows:**
- Position: Flush to carousel edges
- Width: 8 pixels (very thin)
- Height: Full carousel height
- Background: White at 80% opacity
- Icon: Chevron in primary color
- Hover: Background becomes more opaque

**Dot Indicators:**
- Position: Below carousel, centered
- Active dot: Filled, primary color
- Inactive dots: Outline only

#### News Card Design

**Structure:**
```
┌─────────────────────────┐
│                         │
│        [IMAGE]          │  ← 16:9 aspect ratio
│                         │
├─────────────────────────┤
│ January 15, 2025        │  ← Date in primary color
│ Article Title Here      │  ← Bold, 1.125rem
│ Brief excerpt of the    │  ← Muted color, truncated
│ article content...      │
└─────────────────────────┘
```

**Specifications:**
- Border radius: 14px
- Background: Card background (white)
- Shadow: Soft shadow
- Image: 16:9 aspect ratio, overflow hidden

**Hover Effects:**
- Image scales to 105%
- Card lifts up 1 pixel (translateY(-1px))
- Shadow intensifies
- Transition: 300ms

**Auto-play:**
- Advances every 4 seconds
- Pauses when user interacts
- Loops infinitely

---

### 5.6 Sponsors Marquee Section

**Visual Description:**
An infinite scrolling marquee of sponsor/partner logos with a call-to-action button above.

**Specifications:**
- **Background**: Gradient from muted/20% to background
- **Padding**: 64px vertical

#### Section Header

- **Title**: "Our Partners & Sponsors" / "Нашите партнери и спонзори"
- **Subtitle**: Thank you message to partners
- **Button**: "Get in Touch" - primary colored, links to contact page

#### Marquee Display

```
← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← (continuous scroll)

  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
  │  (S1)  │  │  (S2)  │  │  (S3)  │  │  (S4)  │  │  (S5)  │
  │   ●    │  │   ●    │  │   ●    │  │   ●    │  │   ●    │
  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘
```

**Marquee Behavior:**
- Direction: Right to left
- Speed: 30 seconds per complete cycle
- Content: Sponsor cards duplicated for seamless loop
- Pause: On hover

**Sponsor Cards:**
- Width: 192 pixels
- Height: 128 pixels
- Border radius: 14px
- Shadow: Soft shadow
- Background: Card background

**Card Content:**
- Circular logo placeholder: 96px diameter
- Background: Primary at 10% opacity
- Text: Sponsor initials (S1, S2, etc.) in primary color

**Hover Effects:**
- Logo background fills with primary color
- Text becomes white
- Transition: 300ms

---

### 5.7 Donate Call-to-Action Section

**Visual Description:**
A visually striking section with a gradient background encouraging donations.

**Specifications:**
- **Background**: Primary gradient (purple to blue diagonal)
- **Text Color**: White
- **Padding**: 80px vertical

#### Content Layout

```
            ┌─────────┐
            │   ❤️    │    ← Heart icon in white circle
            └─────────┘
        
       Support Our Mission         ← Bold title
    
    Your contribution helps us      ← Description (90% white)
    reach more children...
    
         ┌─────────────────┐
         │   Donate Now    │       ← Accent cyan button
         └─────────────────┘
```

**Icon Container:**
- Size: 80px diameter
- Background: White at 20% opacity
- Border radius: Full circle
- Icon: Heart, 40px, white

**Title:**
- Text: "Support Our Mission" / "Поддржете ја нашата мисија"
- Size: 3xl-4xl
- Weight: Bold
- Color: White

**Description:**
- Maximum width: 672px (2xl)
- Color: White at 90% opacity
- Alignment: Centered

**Button:**
- Background: Accent cyan
- Text: Accent foreground (dark)
- Padding: 32px horizontal, 24px vertical
- Border radius: 14px
- Shadow: Enhanced shadow
- Hover: Slightly darker accent

---

### 5.8 Footer

**Visual Description:**
A comprehensive footer with three columns of information, social links, and a newsletter signup form.

**Specifications:**
- **Background**: Primary purple (solid)
- **Text Color**: White
- **Padding**: 48px vertical

#### Three-Column Layout

```
┌────────────────────┬────────────────────┬────────────────────┐
│                    │                    │                    │
│  [🐼] COGNITA      │  CONTACT US        │  NEWSLETTER        │
│                    │                    │                    │
│  Brief description │  📞 +389 XX XXX    │  Stay updated...   │
│  about the org...  │  ✉️  info@...      │                    │
│                    │  📍 Address...     │  [Email input    ] │
│  [FB][TW][IG][LI]  │                    │  ☑ I agree to...   │
│                    │                    │  [Subscribe     ]  │
│                    │                    │                    │
└────────────────────┴────────────────────┴────────────────────┘
```

#### Column 1: Branding

**Logo:**
- Container: White circle, 56px diameter
- Image: Panda logo
- Adjacent text: "COGNITA" bold, xl size

**About Text:**
- Brief description of organization
- Color: White at 80% opacity
- Size: Small (sm)

**Social Links:**
- Four circular icons in a row
- Same style as top strip but in footer context

#### Column 2: Contact

**Heading:** "Contact Us" / "Контактирајте нè"

**Contact Items:**
- Phone number with phone icon
- Email address with mail icon
- Physical address with map pin icon
- All white text, icons 16px
- Hover: Accent color

#### Column 3: Newsletter

**Heading:** "Newsletter" / "Билтен"

**Description:** Brief invite to subscribe

**Email Input:**
- Background: White at 10% opacity
- Border: White at 30% opacity
- Placeholder: "Enter your email" in white at 50%
- Text: White

**Consent Checkbox:**
- Border: 2px solid white
- Checked state: Accent cyan background
- Label: White text, cursor pointer
- Size: Larger than default for visibility

**Subscribe Button:**
- Full width
- Background: Accent cyan
- Text: Accent foreground (dark)

#### Footer Footnote Bar

**Specifications:**
- Background: Darker purple (--footer-footnote)
- Padding: 16px vertical
- Text: Centered, small size

**Content:**
- "© 2025 COGNITA — All rights reserved."
- Text color: White

---

## 6. Interior Pages

### 6.1 About Page

**Structure:**
- Standard header/footer
- White main background

**Content Sections:**

1. **Page Header**
   - Title: "About Us" / "За нас"
   - Subtitle description

2. **Value Cards** (3-column grid)
   - Mission card
   - Vision card
   - Values card
   - Each with icon, title, description

3. **Our Story Section**
   - Background: Muted at 30%
   - Two-column layout: Image + text

---

### 6.2 Team Page

**Structure:**
- 6 team member cards in 3-column grid (2 columns tablet, 1 mobile)

**Team Card Design:**
```
┌─────────────────────┐
│                     │
│      [PHOTO]        │  ← Square, rounded corners
│                     │
├─────────────────────┤
│   Member Name       │  ← Bold, lg size
│   Role Title        │  ← Primary color
│                     │
│   Brief bio text    │  ← Muted foreground
│   about the member  │
│                     │
│   [✉️] [LinkedIn]   │  ← Contact icons
└─────────────────────┘
```

**Photo Hover:** Scales to 105%

---

### 6.3 News Page

**Structure:**
- Grid of article cards (3 columns desktop)

**Article Card:**
- Image with category pill overlay
- Category pill: Primary at 10% background, rounded
- Date in primary color
- Title bold
- Excerpt text truncated
- "Read more" link with arrow

---

### 6.4 Partners Page

**Sections:**
1. Partner cards with logos
2. "Become a Partner" CTA section with muted background

---

### 6.5 Contact Page

**Two-Column Layout:**

**Left Column - Contact Form:**
- Name input
- Email input
- Subject input
- Message textarea
- Submit button (primary)
- "Already subscribed?" link to unsubscribe page

**Right Column:**
- Contact info cards (phone, email, address)
- Embedded Google Map placeholder

---

### 6.6 Donate Page

**Two-Column Layout:**

**Left Column - Donation Form:**
- Frequency toggle (One-time / Monthly)
- Amount buttons ($10, $25, $50, $100, Custom)
- Payment method selection (Credit Card, PayPal, Bank Transfer)
- Selected state: Purple border + light purple background

**Right Column - Impact Card:**
- Shows what each donation amount provides
- Example: "$25 provides school supplies for 5 children"

---

### 6.7 Unsubscribe Page

**Layout:**
- Centered card on muted background
- Mail icon in circular muted container
- Title and description
- Email input field
- Unsubscribe button

---

## 7. Interactive Behaviors & Animations

### Button Hover States

| Button Type | Default State | Hover State |
|-------------|--------------|-------------|
| Primary | Primary purple background | 5% darker (primary-hover) |
| Secondary | Secondary blue background | 5% darker (secondary-hover) |
| Accent | Accent cyan background | 5% darker (accent-hover) |
| All buttons | shadow-soft | shadow-hover |

### Card Hover Effects

- Shadow transitions from soft to hover
- Duration: 300ms
- Timing function: ease-out
- Some cards lift up with translateY(-1px)

### Navigation Dropdowns

**Animation Properties:**
- Trigger: On hover
- Initial state: opacity 0, translateY(-10px)
- Final state: opacity 1, translateY(0)
- Duration: 300ms
- Timing: ease-out

### Language Switcher Animation

- Sliding white background highlight
- Duration: 500ms
- Direction: Left for EN, Right for MK
- Timing: ease-in-out

### Number Counter Animation

- Trigger: Section 30% visible in viewport
- Duration: 2000ms
- Steps: 60 interpolated values
- Behavior: Counts from 0 to target number
- Reset: On language change

### Hero Typewriter Animation

- Character reveal speed: 80ms per character
- No cursor animation
- Resets on language change

### Blob Background Animation

**Keyframes (7-second cycle):**
```
0%, 100%: translate(0, 0) scale(1)
33%: translate(30px, -50px) scale(1.1)
66%: translate(-20px, 20px) scale(0.9)
```

**Stagger delays:** 0s, 2s, 3s, 4s

### Accordion Animations

- Down: height 0 → full, opacity 0 → 1
- Up: height full → 0, opacity 1 → 0
- Duration: 200ms
- Timing: ease-out

---

## 8. Shadows & Elevations

| Shadow Name | CSS Value | Usage |
|-------------|-----------|-------|
| **shadow-soft** | 0 4px 20px -4px hsl(var(--primary) / 0.15) | Default state for cards, buttons |
| **shadow-hover** | 0 8px 30px -4px hsl(var(--primary) / 0.25) | Hover state, elevated elements |

The shadows have a purple tint matching the primary color, creating cohesive depth throughout the design.

---

## 9. Border Radius System

| Size Token | Pixel Value | CSS Variable | Usage |
|------------|-------------|--------------|-------|
| **lg** | 14px | var(--radius) | Cards, modals, large buttons |
| **md** | 12px | calc(var(--radius) - 2px) | Medium elements |
| **sm** | 10px | calc(var(--radius) - 4px) | Small elements, pills |
| **full** | 50% | 50% | Circular elements (logos, avatars, icons) |

---

## 10. Responsive Design

### Breakpoints

| Breakpoint | Width | Tailwind Prefix |
|------------|-------|-----------------|
| Mobile | 0 - 767px | (default) |
| Tablet | 768px+ | md: |
| Desktop | 1024px+ | lg: |
| Wide | 1400px+ | 2xl: |

### Layout Changes by Breakpoint

**Mobile (< 768px):**
- Single column layouts
- Hamburger menu instead of full navigation
- Stacked cards
- Smaller text sizes
- Hidden secondary text in top strip

**Tablet (768px+):**
- 2-column grids
- Expanded navigation (may still be collapsed)
- Larger spacing between elements

**Desktop (1024px+):**
- Full horizontal navigation
- 3-column grids
- All text sizes at full scale
- Maximum visual complexity

**Wide (1400px+):**
- Container reaches maximum width
- Additional horizontal padding possible

---

## 11. Bilingual Support

### Supported Languages

1. **English (EN)** - Default
2. **Macedonian (MK)** - Cyrillic script

### Elements That Switch

| Element | English | Macedonian |
|---------|---------|------------|
| Logo text | COGNITA | КОГНИТА |
| Navigation labels | Welcome, About, etc. | Добредојде, За нас, etc. |
| Section titles | Who We Are | Кои сме ние |
| Button text | Donate Now | Донирај сега |
| Form labels | Email, Name | Е-пошта, Име |
| Footer content | All text | All text |

### Language Switch Behavior

- **Method**: React state change (no page reload)
- **Animation**: Language switcher slides
- **Effect**: All text updates instantly
- **Persistence**: Language preference maintained

### Font Considerations

- **English logo**: Knewave font
- **Macedonian logo**: Lobster font
- **Body text**: Manrope supports Cyrillic

---

## Appendix: CSS Custom Properties Reference

```css
:root {
  /* Core Colors */
  --background: 0 0% 100%;
  --foreground: 262 35% 30%;
  --primary: 262 35% 45%;
  --secondary: 220 49% 50%;
  --accent: 178 100% 85%;
  
  /* Hover States */
  --primary-hover: 262 35% 40%;
  --secondary-hover: 220 49% 45%;
  --accent-hover: 178 100% 80%;
  
  /* Surfaces */
  --card: 0 0% 100%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  
  /* Borders & Inputs */
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 262 35% 45%;
  
  /* Special Sections */
  --top-strip-bg: 262 40% 28%;
  --footer-footnote: 262 38% 32%;
  
  /* System */
  --radius: 0.875rem;
}
```

---

*Document created for COGNITA NGO website - Last updated February 2025*
