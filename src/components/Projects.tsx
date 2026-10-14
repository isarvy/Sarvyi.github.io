import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { projects, type Project, type Tag } from '../data/projects'
import { Github } from './icons'
import { Section } from './Section'

const filters: ('All' | Tag)[] = ['All', 'Cloud/DevOps', 'ML', 'Web', 'Mobile']

function Cover({ p, className = '' }: { p: Project; className?: string }) {
  return p.image ? (
    <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className={`object-cover ${className}`} />
  ) : (
    <div className={`grid place-items-center bg-surface font-mono text-accent ${className}`} aria-hidden>
      <span className="text-3xl">{'</>'}</span>
    </div>
  )
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    ref.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>('a,button')
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-line bg-surface outline-none"
      >
        <div className="relative">
          <Cover p={p} className="h-48 w-full sm:h-64" />
          <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 rounded-full bg-black/70 p-2 hover:text-accent">
            <X size={18} />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{p.title}</h3>
          <p className="mt-3 text-sm text-muted">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="rounded-md border border-line px-2 py-1 font-mono text-xs">{s}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent">
                <Github size={16} /> Code
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black">
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<'All' | Tag>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <Section id="projects" title="Projects" cmd="ls ./projects">
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${filter === f ? 'border-accent bg-accent/10 text-accent' : 'border-line text-muted hover:text-text'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              layout
              key={p.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <button
                onClick={() => setSelected(p)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-surface/70 text-left transition hover:border-accent hover:shadow-[0_0_30px_-12px_var(--color-accent)]"
              >
                <Cover p={p} className="h-40 w-full transition group-hover:scale-[1.02]" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
                  <p className="mt-4 font-mono text-xs text-accent">{p.stack.slice(0, 3).join(' · ')}</p>
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>{selected && <Modal p={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Section>
  )
}
