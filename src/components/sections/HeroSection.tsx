import { BRASS, DISPLAY, SANS, TEXT, body } from '../../constants/theme'

export interface HeroSectionProps {
  scrollY: number
  heroReady: boolean
}

export default function HeroSection({ scrollY, heroReady }: HeroSectionProps) {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#07101A' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1655178353433-2e774ba32ff4?w=1920&h=1080&fit=crop&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        transform: `translateY(${scrollY * 0.38}px)`,
        filter: 'brightness(0.35)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: [
          'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(7,16,26,0.6) 100%)',
          'linear-gradient(to top, rgba(7,16,26,0.97) 0%, rgba(7,16,26,0.15) 38%, transparent 58%)',
        ].join(', '),
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 24px',
        animation: heroReady ? 'heroFadeIn 1.8s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
        opacity: heroReady ? undefined : 0,
      }}>
        <p style={{
          fontFamily: SANS,
          fontSize: '10px',
          letterSpacing: '0.28em',
          color: BRASS,
          textTransform: 'uppercase',
          marginBottom: '28px',
          opacity: 0.7,
        }}>
          Digital Heritage Experience
        </p>
        <h1 style={{
          fontFamily: DISPLAY,
          fontSize: 'clamp(80px, 15vw, 180px)',
          fontWeight: 300,
          letterSpacing: '-0.025em',
          lineHeight: 0.88,
          color: '#F1F5F9',
          margin: '0 0 36px',
        }}>
          Pawitra
        </h1>
        <p style={{
          fontFamily: SANS,
          fontSize: 'clamp(11px, 1.4vw, 14px)',
          letterSpacing: '0.22em',
          color: body(0.4),
          textTransform: 'uppercase',
          fontWeight: 300,
        }}>
          Membaca Gunung Suci Jawa
        </p>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '44px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        opacity: heroReady ? 0.4 : 0,
        transition: 'opacity 2.5s ease 1.2s',
      }}>
        <span style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.22em', color: TEXT, textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '52px',
          backgroundColor: TEXT,
          animation: 'scrollLine 2.2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
