# agents.md

## 1. Project Identity & Design Philosophy
**Goal:** Reproduce the "Sako Global" aesthetic—a premium, minimalist digital experience that embodies "Passion for Precision."
**Core Values:** Reliability, Accuracy, Heritage, Modernity, Uncompromised Quality.
**Visual Style:** "High-Contrast Precision." The interface is stark, clean, and clinical. Heavy use of white space, sharp black typography, and high-fidelity photography.
**Key Rule:** The UI serves as a clean frame. Content is king. The contrast between deep black text and bright white backgrounds creates a feeling of authoritative precision.

---

## 2. Technical Stack & Libraries
The agent is empowered to use the following modern stack to achieve the required fidelity:

* **Framework:** React.
* **Styling:** Tailwind CSS (primary) + CSS Modules (for specific animations if needed).
* **Animation Engine:**
    * **Framer Motion:** Primary tool for UI transitions, layout changes, and hover effects.
    * **Intersection Observer:** For scroll-triggered reveals.
* **Physics/Interaction:** `framer-motion` drag gestures for tactile sliders.

---

## 3. Brand Design Tokens (Light Mode Edition)

### A. Color Palette (The "Clinical Precision" Theme)
- **Primary**: `#111111` (Rich Black)
- **Secondary**: `#f4f4f4` (Off-White/Panel Grey)
- **Accent**: `#cfa04a` (Industrial Gold)
- **Action**: `#5E8E15` (Deep Sage Green) - *Updated from Red*
- **Text**: `#111111` (Main), `#555555` (Muted)

### B. Typography
- **Display**: `Montserrat` (Weights: 600, 700, 800, 900) - Uppercase, tight tracking.
- **Body**: `Inter` (Weights: 300, 400, 500) - Clean, legible, high readability.
- **Technical**: `Inter` (Weights: 500, 600) - *Replaced Monospace with bold Sans-Serif for technical data.*

### C. Layout & Grid
* **Whitespace:** Sections should have `py-24` or `py-32`. Never crowd elements.

---

## 4. Interaction Patterns & Motion

### A. Navigation (The "Clean" Header)
* **State:** Sticky, white background, black text.
* **Mega Menu:**
    * *Trigger:* Hover (Desktop) / Click (Mobile).
    * *Transition:* Panel slides down from header.
    * *Visual:* Sharp shadows (`shadow-xl`) to separate from content.

### B. Hero Section (Overlapping Layout)
* **Layout:** Split composition. Large technical image takes the top 60-80% of the viewport.
* **Overlap:** A white content box overlaps the bottom of the image (`-mt-24`).
* **Typography:** Black text on white box. High contrast.

### C. Scroll-Triggered Effects
* **Reveal:** "Slide Up and Fade."
    * *Start:* Element is translated Y (`40px`) and Opacity `0`.
    * *End:* Element moves to `0px` and Opacity `1`.
    * *Easing:* `cubic-bezier(0.16, 1, 0.3, 1)` (Heavy/Precision easing).

### D. "Precision" Micro-Interactions
* **Buttons:**
    * *Solid:* Black background, white text. Hover -> Gold background.
    * *Outline:* Black border, black text. Hover -> Black background, white text.
    * *Animation:* Sweep effects or color transitions.
* **Hover States:** Images zoom slowly (`scale 1.0` -> `1.05`). Grayscale to Color transitions are encouraged to emphasize "coming alive".

---

## 5. Component Specifications

### The "Product Card"
* **Visuals:** White card on light gray background.
* **Behavior:** Image scales on hover.
* **Typography:** Uppercase titles.
* **Detail:** Technical specs listed clearly below image.

### The "Spec Table" (Technical)
* **Visuals:** Clean white background.
* **Borders:** Thin, crisp black lines (`border-gray-200` or `border-black`).
* **Font:** Monospace for values to emphasize engineering data.
* **Interaction:** Subtle row highlight on hover.

---

## 6. Responsiveness Strategy
* **Mobile (<768px):**
    * Stack grid items vertically.
    * Remove overlapping negative margins in Hero (stack normally).
    * Full screen mobile menu.
* **Tablet (768px - 1024px):**
    * Adjust padding.
* **Ultra-Wide (>1920px):**
    * Clamp content max-width to keep text readable.

## 7. Implementation Directives
* **Do** use strict uppercase for headers and buttons.
* **Do** ensure text contrast ratios are high (Black on White).
* **Do not** use soft shadows or rounded corners (radius > 4px). Keep it sharp.
* **Do** prioritize image quality. Images should feel "Technical" and "Industrial".

---

## 8. Built-In AI Coding Agent (ai-sandbox)
* **Scope awareness:** The embedded AI editor (floating chat) only edits TSX pages (app/**/page.tsx), components under components/**, and small content files. It avoids layout files, config, lockfiles, and CI/Vercel settings.
* **Multi-file commits:** When multiple text files need changes (e.g., coordinated UI tweaks across sections), prefer batching with the `update_files` tool so the agent pushes a single commit instead of one per file.
* **Text-only rule:** Keep edits in UTF-8 text. Do not generate binaries, images, or bundled/minified artifacts; GitHub diffs should remain readable.
* **Context retention:** The chat stores its history in session storage so conversations persist across navigation during a browsing session. Share concise prompts to keep the agent on task.
* **Diagnostics:** Server responses can include diagnostics payloads when GitHub/OpenAI fail—surface these in logs if troubleshooting deployment issues.
