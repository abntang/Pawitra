import { useEffect, useRef, useState, type ReactNode } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, visible }
}

export interface RevealProps {
  children: ReactNode
  dir?: 'up' | 'left' | 'right'
  delay?: 0 | 1 | 2 | 3 | 4
  slow?: boolean
  className?: string
}

export default function Reveal({
  children,
  dir = 'up',
  delay = 0,
  slow = false,
  className = '',
}: RevealProps) {
  const { ref, visible } = useInView()
  const base = slow
    ? 'reveal-slow'
    : dir === 'left'
    ? 'reveal-left'
    : dir === 'right'
    ? 'reveal-right'
    : 'reveal'
  const d = delay ? `delay-${delay}` : ''

  return (
    <div ref={ref} className={`${base} ${visible ? 'visible' : ''} ${d} ${className}`}>
      {children}
    </div>
  )
}
