import { BRASS, DISPLAY, HEAD, IMG_BG, SANS, body, title } from '../../constants/theme'
import ChapterNumber from '../common/ChapterNumber'
import Reveal from '../common/Reveal'

export default function Chapter04Manusia() {
  return (
    <section id="chapter-04" style={{ padding: '140px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 52px' }}>

        <div style={{ marginBottom: '80px' }}>
          <Reveal><ChapterNumber n="04" /></Reveal>
          <Reveal delay={1}>
            <h2 style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(38px, 4.5vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: HEAD,
              letterSpacing: '-0.015em',
              maxWidth: '640px',
              paddingBottom: '4px',
            }}>
              Manusia:<br />
              <em style={{ fontStyle: 'italic', display: 'inline-block' }}>Mereka yang Menjaga Jejak</em>
            </h2>
          </Reveal>
        </div>

        {/* Past / Present — two-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>

          <div style={{ paddingRight: '16px', borderRight: '1px solid rgba(196,169,108,0.1)' }}>
            <Reveal>
              <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.22em', color: BRASS, textTransform: 'uppercase', marginBottom: '32px', opacity: 0.6 }}>
                Masa Lalu
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: IMG_BG, marginBottom: '32px' }}>
                <img
                  src="https://images.unsplash.com/photo-1704288240546-0562fc73ac74?w=700&h=900&fit=crop&auto=format"
                  alt="Menara candi tinggi dengan arca-arca di sisinya — warisan arsitektur spiritual Jawa"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', filter: 'brightness(0.58) sepia(0.15)' }}
                />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), fontWeight: 300 }}>
                Komunitas spiritual, pertapa, dan pemuja gunung adalah mereka yang pertama
                menjaga kesakralan Penanggungan. Selama ratusan tahun, bangunan dirawat,
                ritual dilangsungkan, dan ingatan diteruskan dari generasi ke generasi.
              </p>
            </Reveal>
          </div>

          <div style={{ paddingLeft: '16px' }}>
            <Reveal>
              <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.22em', color: body(0.3), textTransform: 'uppercase', marginBottom: '32px' }}>
                Masa Kini
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: IMG_BG, marginBottom: '32px' }}>
                <img
                  src="https://images.unsplash.com/photo-1670516537787-22e2d8de641f?w=700&h=900&fit=crop&auto=format"
                  alt="Para peneliti dan arkeolog bekerja di lapangan, mendokumentasikan warisan budaya"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', filter: 'brightness(0.65)' }}
                />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), fontWeight: 300 }}>
                Arkeolog, peneliti, komunitas lokal, dan para pendaki adalah pewaris dari
                penjaga yang sama. Mereka merawat bukan hanya dengan mengkonservasi batu,
                tetapi dengan memastikan kisah ini terus diceritakan kepada yang datang setelah.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Large centered closing quote for this chapter */}
        <Reveal>
          <div style={{
            textAlign: 'center',
            marginTop: '96px',
            paddingTop: '72px',
            borderTop: '1px solid rgba(196,169,108,0.09)',
          }}>
            <p style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(26px, 3.5vw, 48px)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: title(0.75),
              lineHeight: 1.45,
            }}>
              "Peradaban tidak hanya diwariskan — tetapi dirawat."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
