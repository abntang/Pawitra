import { motion } from 'framer-motion'
import { useRef, useState, type ReactNode } from 'react'

export interface MagnetProps {
  children: ReactNode
  strength?: number
  className?: string
  style?: React.CSSProperties
}

export default function Magnet({
  children,
  strength = 30,
  className = '',
  style = {},
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = left + width / 2
    const middleY = top + height / 2
    const offsetX = (e.clientX - middleX) / (width / 2)
    const offsetY = (e.clientY - middleY) / (height / 2)
    setPosition({ x: offsetX * strength, y: offsetY * strength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ display: 'inline-block', ...style }}
    >
      {children}
    </motion.div>
  )
}
