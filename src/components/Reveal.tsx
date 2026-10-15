import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Origin = 'top' | 'bottom' | 'left' | 'right'

// Replaces ScrollReveal: elements slide in from an edge, as in the original site.
export function Reveal({
  origin = 'bottom',
  className,
  id,
  children,
}: {
  origin?: Origin
  className?: string
  id?: string
  children: ReactNode
}) {
  const reduce = useReducedMotion()
  const d = 80
  const from = {
    top: { y: -d },
    bottom: { y: d },
    left: { x: -d },
    right: { x: d },
  }[origin]

  return (
    <motion.div
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
