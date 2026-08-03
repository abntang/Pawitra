import { DISPLAY, MUTED, SANS, body } from '../../constants/theme'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(196,169,108,0.09)',
      padding: '44px 52px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <span style={{ fontFamily: DISPLAY, fontSize: '15px', fontWeight: 300, letterSpacing: '0.08em', color: body(0.28) }}>
        Pawitra — Digital Heritage Experience
      </span>
      <span style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.18em', color: MUTED, textTransform: 'uppercase', opacity: 0.4 }}>
        Gunung Penanggungan, Jawa Timur
      </span>
    </footer>
  )
}
