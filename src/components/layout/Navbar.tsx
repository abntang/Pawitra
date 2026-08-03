import { useEffect, useState } from 'react'
import { BRASS, DISPLAY, HEAD, MUTED, SANS, TEXT, navy } from '../../constants/theme'

export interface NavbarProps {
  navSolid: boolean
}

const NAV_LINKS = [
  ['01', 'chapter-01'],
  ['02', 'chapter-02'],
  ['03', 'chapter-03'],
  ['04', 'chapter-04'],
  ['05', 'chapter-05'],
]

export default function Navbar({ navSolid }: NavbarProps) {
  const [activeId, setActiveId] = useState<string>('')

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.35 }
    )

    NAV_LINKS.forEach(([, id]) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '12px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: navSolid ? navy(0.9) : 'transparent',
      backdropFilter: navSolid ? 'blur(18px)' : 'none',
      borderBottom: navSolid ? '1px solid rgba(196,169,108,0.07)' : '1px solid transparent',
      transition: 'background-color 0.7s ease, border-color 0.7s ease',
    }}>
      <span style={{ fontFamily: DISPLAY, fontSize: '17px', fontWeight: 300, letterSpacing: '0.1em', color: HEAD }}>
        Pawitra
      </span>
      <div style={{ display: 'flex', gap: '36px' }}>
        {NAV_LINKS.map(([label, id]) => {
          const isActive = activeId === id
          return (
            <a
              key={id}
              href={`#${id}`}
              style={{
                fontFamily: SANS,
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: isActive ? BRASS : MUTED,
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.35s ease',
                position: 'relative',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = TEXT }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = MUTED }}
            >
              {label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
