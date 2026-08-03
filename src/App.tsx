// ── Design Read (taste-skill 0.B) ─────────────────────────────────────────────────────────────
// Reading this as: Digital Heritage Experience for history, archaeology, and design enthusiasts,
// with an editorial / documentary language, leaning toward dark editorial layout + Cormorant Garamond /
// Plus Jakarta Sans + restrained motion.
// ── Ponytail Senior Dev Discipline ─────────────────────────────────────────────────────────────
// YAGNI: Modular component composition, zero redundant state or bloated helper functions.

import { useEffect, useState } from 'react'

// Constants & Theme
import { GROUND, SANS, TEXT } from './constants/theme'

// Common Primitives
import Hairline from './components/common/Hairline'

// Layout Components
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

// Narrative Chapter Sections
import Chapter01Pawitra from './components/sections/Chapter01Pawitra'
import Chapter02Tirta from './components/sections/Chapter02Tirta'
import Chapter03Batu from './components/sections/Chapter03Batu'
import Chapter04Manusia from './components/sections/Chapter04Manusia'
import Chapter05Warisan from './components/sections/Chapter05Warisan'
import HeroSection from './components/sections/HeroSection'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 300)
    return () => clearTimeout(t)
  }, [])

  const navSolid = scrollY > 60

  return (
    <div style={{ backgroundColor: GROUND, color: TEXT, fontFamily: SANS }}>
      {/* Navigation Bar */}
      <Navbar navSolid={navSolid} />

      {/* Opening Hero Section */}
      <HeroSection scrollY={scrollY} heroReady={heroReady} />

      <Hairline />

      {/* Narrative Chapters */}
      <Chapter01Pawitra />
      <Hairline />

      <Chapter02Tirta />
      <Hairline />

      <Chapter03Batu />
      <Hairline />

      <Chapter04Manusia />
      <Hairline />

      <Chapter05Warisan />

      {/* Footer */}
      <Footer />
    </div>
  )
}
