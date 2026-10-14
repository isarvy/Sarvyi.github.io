import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  cmd,
  children,
}: {
  id: string
  title: string
  cmd: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-accent">
          <span className="text-ok">$</span> {cmd}
        </p>
        <h2 className="mt-2 mb-10 text-3xl font-semibold sm:text-4xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  )
}
