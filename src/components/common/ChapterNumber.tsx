import { BRASS, MUTED, SANS } from '../../constants/theme'

export interface ChapterNumberProps {
  n: string
}

export default function ChapterNumber({ n }: ChapterNumberProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
      <div style={{ width: '28px', height: '1px', backgroundColor: BRASS, opacity: 0.45 }} />
      <span style={{
        fontFamily: SANS,
        fontSize: '10px',
        letterSpacing: '0.2em',
        color: MUTED,
        textTransform: 'uppercase',
      }}>
        {n} — 05
      </span>
    </div>
  )
}
