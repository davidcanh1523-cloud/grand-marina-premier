# DESIGN.md - Grand Marina Premier Design System

## Aesthetic Stance
- **Mode**: Persuade (Luxury Real Estate / Ultra-High-End Hospitality).
- **Style**: Oceanic Luxury Minimalism + Modern Swiss Grid + Glassmorphic Accents.
- **Tone**: Uy quyền, tinh tế, riêng tư, độc bản (Bespoke, Prestigious, Serene).

## Typography
- **Headlines / Display**: `Cinzel` (Google Fonts, weights 500, 600, 700). Conveys timeless Roman architectural elegance and high-end luxury.
- **Body & Numerical Data**: `Plus Jakarta Sans` (Google Fonts, weights 300, 400, 500, 600, 700, 800). Crisp geometric sans-serif ensuring 100% legibility on mobile screens (390px) up to 4K displays.

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| `bg-primary` | `#050D15` | Deep abyssal ocean night background |
| `bg-surface` | `#071320` | Subtle contrast card background |
| `gold-champagne` | `#D4AF37` | Primary brand accent, CTAs, luxury highlights |
| `gold-light` | `#F9E79F` | Gradient highlight for headings & buttons |
| `gold-deep` | `#AA7C11` | Gradient shade & active button states |
| `cyan-accent` | `#22D3EE` | Interactive 3D blueprints, map markers, modern tech cues |
| `emerald-accent` | `#34D399` | PageSpeed 99/100, verified legal status, ROI metrics |
| `text-primary` | `#FFFFFF` | Headlines and high emphasis text |
| `text-secondary` | `#CBD5E1` | Body paragraphs and descriptive subtitles |
| `text-muted` | `#64748B` | Labels, captions, disclaimers |

## Layout & Motion Guidelines (Taste Skill & Impeccable)
1. **One Section Per Viewport**: Every section has intentional breathing room, equal left/right margins, and avoids clutter.
2. **Interactive Lift**: Interactive cards lift by `-3px` on hover with a smooth cubic-bezier curve (`cubic-bezier(0.16, 1, 0.3, 1)`).
3. **Image Frames**: Architectural photography zooms subtly (`scale-105`) over 700ms on hover.
4. **Button Feedback**: Distinct hover gradient transition and active `:active:scale-95` state.
5. **No Slop**: Zero default gradients, zero generic stock layouts, authentic Vietnamese luxury real estate specifications.
