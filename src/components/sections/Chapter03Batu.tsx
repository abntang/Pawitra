import { BRASS, DISPLAY, HEAD, IMG_BG, SANS, body, navy, title } from '../../constants/theme'
import ChapterNumber from '../common/ChapterNumber'
import Reveal from '../common/Reveal'

export default function Chapter03Batu() {
  return (
    <section id="chapter-03" style={{ padding: '140px 0' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 52px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '80px',
        alignItems: 'start',
      }}>

        {/* Text — left */}
        <div>
          <Reveal><ChapterNumber n="03" /></Reveal>
          <Reveal delay={1}>
            <h2 style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(38px, 4.5vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.06,
              color: HEAD,
              marginBottom: '48px',
              letterSpacing: '-0.015em',
            }}>
              Batu:<br />
              <em>Bahasa yang<br />Tidak Bersuara</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), marginBottom: '24px', fontWeight: 300 }}>
              Batu menyimpan ingatan. Bukan karena ia keras, tetapi karena ia sabar.
              Selama berabad-abad, manusia memahatkan pikiran, doa, dan kisah mereka
              ke permukaan batu — dan batu menjaganya dengan setia.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), marginBottom: '44px', fontWeight: 300 }}>
              Di lereng Penanggungan, lebih dari 80 situs arkeologi tersebar membentuk
              lanskap sakral yang belum sepenuhnya terbaca. Punden berundak, arca, dan relief
              adalah teks — ditulis dalam bahasa batu yang menunggu untuk dipahami.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div style={{
              backgroundColor: 'rgba(196,169,108,0.04)',
              border: '1px solid rgba(196,169,108,0.12)',
              padding: '28px 32px',
              marginBottom: '44px',
            }}>
              <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.16em', color: BRASS, textTransform: 'uppercase', marginBottom: '14px', opacity: 0.6 }}>
                Catatan Arkeologi
              </p>
              <p style={{ fontFamily: SANS, fontSize: '14px', lineHeight: 1.8, color: body(0.5), fontWeight: 300 }}>
                Lebih dari 116 bangunan kuno telah diidentifikasi di Gunung Penanggungan,
                menjadikannya gunung dengan konsentrasi situs arkeologi tertinggi di Jawa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), fontWeight: 300 }}>
              Menemukan makna dalam batu bukan seperti membaca database —
              lebih seperti mendengar bisikan dari yang sudah lama pergi.
            </p>
          </Reveal>
        </div>

        {/* Images — staggered right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '80px' }}>
          <Reveal dir="right">
            <div
              style={{ position: 'relative', overflow: 'hidden', backgroundColor: IMG_BG, cursor: 'default' }}
              onMouseEnter={e => {
                const ov = e.currentTarget.querySelector('.stone-reveal') as HTMLElement
                if (ov) ov.style.opacity = '1'
              }}
              onMouseLeave={e => {
                const ov = e.currentTarget.querySelector('.stone-reveal') as HTMLElement
                if (ov) ov.style.opacity = '0'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1643760512932-ad6583917711?w=700&h=500&fit=crop&auto=format"
                alt="Dinding batu relief dengan ukiran manusia dan hewan dari peradaban Majapahit"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', filter: 'brightness(0.68) contrast(1.12)' }}
              />
              <div
                className="stone-reveal"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: navy(0.82),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1)',
                  padding: '32px',
                }}
              >
                <p style={{ fontFamily: DISPLAY, fontSize: '19px', fontStyle: 'italic', color: title(0.85), textAlign: 'center', lineHeight: 1.55, fontWeight: 300 }}>
                  "Relief ini merekam kehidupan yang telah berlalu 700 tahun lalu — namun ceritanya masih bisa dibaca."
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right" delay={2}>
            <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: IMG_BG }}>
              <img
                src="https://images.unsplash.com/photo-1702437595734-61abad4b3e11?w=700&h=900&fit=crop&auto=format"
                alt="Ukiran batu arca perempuan memegang burung — detail keahlian pemahat kuno Jawa"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', filter: 'brightness(0.62) contrast(1.1)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '32px 20px 20px',
                background: `linear-gradient(to top, ${navy(0.88)} 0%, transparent 100%)`,
              }}>
                <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.13em', color: body(0.38), textTransform: 'uppercase' }}>
                  Arca — Abad XIV Masehi
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
