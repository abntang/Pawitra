import { useEffect, useState } from 'react'

export interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  characters?: string
  className?: string
  style?: React.CSSProperties
  animateOn?: 'view' | 'hover'
}

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§¶†‡∆Ω',
  className = '',
  style = {},
  animateOn = 'view',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (animateOn === 'hover' && !isHovered) {
      setDisplayText(text)
      return
    }

    if (animateOn === 'view' && hasAnimated) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n') return char
            if (index < iteration / (maxIterations / text.length)) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      if (iteration >= maxIterations) {
        clearInterval(interval)
        setDisplayText(text)
        if (animateOn === 'view') setHasAnimated(true)
      }
      iteration += 1
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, maxIterations, characters, isHovered, animateOn, hasAnimated])

  return (
    <span
      className={className}
      style={{ ...style, cursor: animateOn === 'hover' ? 'pointer' : 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  )
}
