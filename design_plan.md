# Design Plan: Code as High-Contrast Architecture

## 1. Executive Summary
This document outlines the design and technical strategy for a high-contrast, brutalist developer portfolio. The core concept is **"Code as Architecture"**—treating the interface not as a marketing page but as a structural manifest of technical capability. The aesthetic is strictly monochromatic (#000000 / #ffffff) with precise electric purple (#6c42f5) accents, utilizing heavy parallax, Swiss grid systems, and terminal-inspired interactions.

## 2. Visual Identity & Design System

### 2.1. Color Palette
*   **Void Black**: `#000000` (Background, infinite depth)
*   **Monolith White**: `#ffffff` (Primary text, structural elements)
*   **Electric Purple**: `#6c42f5` (Active states, cursor, specific data points)
*   **Dimmed Gray**: `#333333` (Grid lines, subtle borders, inactive text)

### 2.2. Typography
*   **Primary Display (The Monolith)**: *Inter* (Tight tracking, -5%) or *Oswald* (Bold, uppercase). Used for the name and massive headers.
*   **Technical/Data**: *JetBrains Mono* or *Fira Code*. Used for skills, terminals, and data tables.
*   **Body/Bio**: *Inter* or *Helvetica Now* (High neutrality).

### 2.3. Texture & Atmosphere
*   **Film Grain**: A CSS-based SVG noise overlay fixed to the viewport to create texture within the void.
*   **Lighting**: No soft shadows. Hard contrasts. Occasional neon reflection effects (via CSS box-shadows with low opacity).

## 3. Component Architecture

### 3.1. The Hero Section (The Monolith)
*   **Layout**: Full viewport height.
*   **Elements**:
    *   **Name**: `h1`, sticky positioning. Typography scale: 15vw (responsive colossal). Positioned at the absolute top edge.
    *   **Bio**: Bottom-left quadrant. Max-width 40ch. High readability.
    *   **Status Block**: Bottom-right quadrant. Aligned to grid. Contains "CURRENTLY WORKING" with a pulsing `#6c42f5` dot and social links (X, LinkedIn) formatted as technical specs `[LINKEDIN :: CONNECT]`.
*   **Behavior**: On scroll, the entire hero section recedes (scales down slightly and fades opacity) to create depth.

### 3.2. Script Matrix (Skills)
*   **Concept**: Structural Pillars.
*   **Layout**: Swiss Grid (4-column usually, 1-column mobile).
*   **Headers**: Bold White (Frontend, Backend, AI).
*   **Items**: Monospace lists. No icons. Text only.
    *   *Default*: Dimmed White/Gray.
    *   *Hover*: Snaps to White + Neon Purple Text Shadow.
*   **Interaction**: As the Hero recedes, this section slides OVER it with a higher scroll velocity (Parallax covers).

### 3.3. Project Terminal (The Data Table)
*   **Concept**: The IDE / Raw Data.
*   **Structure**: A strict table/list layout. No cards.
*   **Rows**:
    *   **Collapsed**: `[01] PROJECT_NAME // One-line description // STACK`
    *   **Expanded (Hover/Click)**: Reveals deep details, terminal-style links `> EXECUTE_PREVIEW`, `> ACCESS_SOURCE`.
*   **Animation**: Accordion style expansion. precise easing (bezier: 0.25, 1, 0.5, 1).

## 4. Technical Stack

*   **Framework**: Next.js 15 (App Router).
*   **Styling**: Tailwind CSS v4 (CSS-first config).
*   **Animation**: Framer Motion (Scroll hooks, Layout animations).
*   **Texture**: Custom SVG Noise filter.
*   **Grid**: CSS Grid with strict alignment features.

## 5. Interaction Design (UX)

*   **Scroll**: Smooth, maybe lenis for that "weighty" feel if standard scroll feels too light.
*   **Cursor**: Custom minimal cursor (small dot) that expands into a bracket `[ ]` over clickable areas.
*   **Sound (Optional)**: Subtle mechanical clicks on hover (can be toggled).

## 6. Implementation Steps

1.  **Setup**: Initialize Next.js project with Tailwind v4.
2.  **Core Styles**: Define CSS variables for colors and grid. Implement Noise overlay.
3.  **Hero Implementation**: Build the "Monolith" name and technical bio/status grid.
4.  **Parallax Engine**: Implement scroll velocity hooks.
5.  **Skills Matrix**: Build the grid layout with hover effects.
6.  **Projects Table**: Implement the accordion data table proposed.
7.  **Refinement**: Adjust easing, typography tracking, and responsiveness.
