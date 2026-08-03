import { BRASS, DISPLAY, GROUND, HEAD, SANS, body, navy, title } from '../../constants/theme'
import ChapterNumber from '../common/ChapterNumber'
import Reveal from '../common/Reveal'

export default function Chapter02Tirta() {
  return (
    <section id="chapter-02" style={{ paddingBottom: '140px' }}>
      <Reveal>
        <div style={{ position: 'relative', height: '70vh', overflow: 'hidden', backgroundColor: '#07111C', marginBottom: '96px' }}>
          <img
            src="https://images.unsplash.com/photo-1772817523417-a1e2dcbbf0c7?w=1920&h=900&fit=crop&auto=format"
            alt="Kolam petirtaan kuno dengan air jernih kehijauan — Petirtaan Jolotundo, Jawa Timur"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.5) saturate(0.7)' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: [
              `linear-gradient(to bottom, rgba(7,17,28,0.15) 0%, transparent 28%, ${navy(0.7)} 72%, ${GROUND} 100%)`,
            ].join(', '),
          }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '52px' }}>
            <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.2em', color: BRASS, textTransform: 'uppercase', opacity: 0.65 }}>
              Petirtaan Jolotundo — Abad X Masehi
            </p>
          </div>
        </div>
      </Reveal>

      {/* Asymmetric text: 2fr quote / 3fr body */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 52px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '88px',
        alignItems: 'start',
      }}>
        <div>
          <Reveal><ChapterNumber n="02" /></Reveal>
          <Reveal delay={1}>
            <h2 style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 300,
              lineHeight: 1.1,
              fontStyle: 'italic',
              color: HEAD,
              marginBottom: '48px',
              letterSpacing: '-0.015em',
              paddingBottom: '4px',
            }}>
              Tirta: Air yang Turun<br />Membawa Kehidupan
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(21px, 2.6vw, 32px)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: title(0.55),
              fontWeight: 300,
            }}>
              "Air bukan hanya kebutuhan.
              Ia adalah persembahan yang turun
              dari tempat yang lebih tinggi."
            </p>
          </Reveal>
        </div>

        <div style={{ paddingTop: '88px' }}>
          <Reveal delay={1}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), marginBottom: '24px', fontWeight: 300 }}>
              Petirtaan Jolotundo adalah salah satu bangunan tertua di lereng Penanggungan,
              dibangun sekitar abad ke-10 Masehi. Ia bukan sekadar fasilitas air bersih —
              tetapi ruang ritual antara manusia dan sumber kehidupan.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), marginBottom: '24px', fontWeight: 300 }}>
              Air yang mengalir dari gunung membawa makna ganda: secara praktis menghidupi
              sawah dan permukiman, secara spiritual menjadi tirta suci yang menghubungkan
              dunia atas dengan dunia bawah.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p style={{ fontFamily: SANS, fontSize: '15px', lineHeight: 1.9, color: body(0.68), fontWeight: 300 }}>
              Jaladwara — pancuran berbentuk makara — adalah titik temu antara kepercayaan
              dan rekayasa peradaban. Di sinilah mitos dan teknik bertemu dalam satu aliran air.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
