import { DISPLAY, HEAD, IMG_BG, SANS, body, navy, title } from '../../constants/theme'
import ChapterNumber from '../common/ChapterNumber'
import Reveal from '../common/Reveal'

export default function Chapter01Pawitra() {
  return (
    <section id="chapter-01" style={{ padding: '140px 0', position: 'relative' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 52px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '88px',
        alignItems: 'center',
      }}>

        {/* Text — wider */}
        <div style={{ gridColumn: 'span 1' }}>
          <Reveal><ChapterNumber n="01" /></Reveal>
          <Reveal delay={1}>
            <h2 style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(38px, 4.5vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: HEAD,
              marginBottom: '40px',
              letterSpacing: '-0.015em',
              paddingBottom: '4px',
            }}>
              Pawitra:<br />
              <em style={{ fontStyle: 'italic', display: 'inline-block' }}>Gunung yang<br />Menghubungkan Dunia</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), marginBottom: '24px', fontWeight: 300 }}>
              Dalam kosmologi Jawa kuno, gunung bukan sekadar bentang alam yang terangkat
              dari bumi. Ia adalah axis mundi — titik penghubung antara dunia manusia,
              dunia alam, dan dunia spiritual yang lebih tinggi.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), marginBottom: '52px', fontWeight: 300 }}>
              Tantu Pagelaran mencatat mitologi pemindahan Gunung Meru ke tanah Jawa.
              Penanggungan — yang dipanggil Pawitra, artinya suci — dipercaya sebagai
              representasi Meru di bumi, puncak yang menjaga keseimbangan pulau.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div style={{ borderLeft: `2px solid rgba(196,169,108,0.3)`, paddingLeft: '28px' }}>
              <p style={{ fontFamily: DISPLAY, fontSize: '21px', fontStyle: 'italic', lineHeight: 1.65, color: title(0.6), fontWeight: 300 }}>
                "Gunung bukan sekadar tanah yang terangkat.
                Ia adalah tempat di mana yang terlihat
                bertemu dengan yang melampaui penglihatan."
              </p>
            </div>
          </Reveal>
        </div>

        {/* Image — narrower, tall */}
        <Reveal dir="right">
          <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: IMG_BG }}>
            <img
              src="https://images.unsplash.com/photo-1680100612420-e57b14dd2c7e?w=900&h=1100&fit=crop&auto=format"
              alt="Gunung Penanggungan diselimuti awan — puncak sakral di cakrawala Jawa Timur"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'brightness(0.75) contrast(1.1)' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to top, ${navy(0.6)} 0%, transparent 55%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'absolute', bottom: '22px', left: '22px' }}>
              <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.13em', color: body(0.38), textTransform: 'uppercase' }}>
                Gunung Penanggungan — 1.653 mdpl
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative topographic SVG */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '180px',
        height: '360px',
        opacity: 0.04,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <svg width="180" height="360" viewBox="0 0 180 360" fill="none">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <ellipse key={i} cx="180" cy="180" rx={50 + i * 16} ry={24 + i * 20} stroke="#C4A96C" strokeWidth="0.6" />
          ))}
        </svg>
      </div>
    </section>
  )
}
