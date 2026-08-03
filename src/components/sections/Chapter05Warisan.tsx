import { DISPLAY, GROUND, HEAD, SANS, body, navy, title } from '../../constants/theme'
import ChapterNumber from '../common/ChapterNumber'
import Reveal from '../common/Reveal'

export default function Chapter05Warisan() {
  return (
    <section id="chapter-05">
      <Reveal>
        <div style={{ position: 'relative', height: '75vh', overflow: 'hidden', backgroundColor: '#070E18' }}>
          <img
            src="https://images.unsplash.com/photo-1693341137488-ab5e6181d230?w=1920&h=1080&fit=crop&auto=format"
            alt="Pemandangan gunung dengan danau di tengahnya — lanskap suci yang terus hidup"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.42)' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, ${navy(0.2)} 0%, transparent 22%, ${navy(0.78)} 75%, ${GROUND} 100%)`,
          }} />
        </div>
      </Reveal>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 52px 140px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '88px',
          alignItems: 'start',
        }}>

          <div>
            <Reveal><ChapterNumber n="05" /></Reveal>
            <Reveal delay={1}>
              <h2 style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(38px, 4.5vw, 64px)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: HEAD,
                marginBottom: '48px',
                letterSpacing: '-0.015em',
                paddingBottom: '4px',
              }}>
                Warisan:<br />
                <em style={{ fontStyle: 'italic', display: 'inline-block' }}>Sesuatu yang Tetap Hidup</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), marginBottom: '24px', fontWeight: 300 }}>
                Majapahit bukan hanya kerajaan yang sudah berlalu. Warisannya terus hidup
                melalui arsitektur, bahasa, budaya, dan cara manusia memandang alam —
                yang masih dapat dirasakan di lereng Penanggungan hingga hari ini.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), fontWeight: 300 }}>
                Sesuatu dapat runtuh secara bentuk, tetapi tetap hidup melalui makna.
                Gunung ini adalah saksi bisu — tetapi ingatan yang ia simpan
                tidak pernah sungguh-sungguh bisu.
              </p>
            </Reveal>
          </div>

          {/* Closing statement — pushed down to create asymmetric baseline */}
          <div style={{ paddingTop: '120px' }}>
            <Reveal dir="right" delay={2}>
              <div style={{ borderLeft: `2px solid rgba(196,169,108,0.28)`, paddingLeft: '32px' }}>
                <p style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(22px, 2.6vw, 33px)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: title(0.5),
                  marginBottom: '12px',
                }}>
                  Gunung tetap berdiri.
                </p>
                <p style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(22px, 2.6vw, 33px)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: title(0.82),
                }}>
                  Ingatan terus berlanjut.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
