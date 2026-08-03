// ── Design Tokens & Constants ─────────────────────────────────────
// Ground: deep navy-charcoal — warm depth without pure black eye strain
// Text: slate blue-gray — readable off-white, not glaring
export const BRASS   = '#C4A96C'
export const MUTED   = '#64748B'
export const TEXT    = '#CBD5E1'
export const HEAD    = '#E2E8F0'
export const GROUND  = '#0E141B'
export const IMG_BG  = '#0B1521'
export const DISPLAY = "'Cormorant Garamond', Georgia, serif"
export const SANS    = "'Plus Jakarta Sans', system-ui, sans-serif"

// RGBA Helper utilities
export const body  = (a: number) => `rgba(203,213,225,${a})`
export const title = (a: number) => `rgba(226,232,240,${a})`
export const navy  = (a: number) => `rgba(14,20,27,${a})`

// ── Taste-Skill Dials (Core Configuration) ─────────────────────────
// DESIGN_VARIANCE: 8 (Asymmetric editorial grid layout)
// MOTION_INTENSITY: 6 (Subtle scroll reveals & parallax)
// VISUAL_DENSITY: 4 (Airy, spacious documentary layout)
export const TASTE_DIALS = {
  DESIGN_VARIANCE: 8,
  MOTION_INTENSITY: 6,
  VISUAL_DENSITY: 4,
}
