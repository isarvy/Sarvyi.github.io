import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { Github, Linkedin } from './icons'

function useTyped(words: string[]) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    let w = 0
    let i = 0
    let deleting = false
    let t: ReturnType<typeof setTimeout>
    const tick = () => {
      const word = words[w]
      i += deleting ? -1 : 1
      setText(word.slice(0, i))
      let delay = deleting ? 45 : 90
      if (!deleting && i === word.length) {
        deleting = true
        delay = 1400
      } else if (deleting && i === 0) {
        deleting = false
        w = (w + 1) % words.length
        delay = 300
      }
      t = setTimeout(tick, delay)
    }
    t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [words])
  return text
}

export function Hero() {
  const typed = useTyped(profile.roles)
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 pt-24 pb-12 sm:px-6 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-ok" /> all systems operational
        </p>
        <h1 className="text-4xl leading-tight font-bold sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 min-h-8 font-mono text-xl text-accent sm:text-2xl">
          {typed}
          <span className="animate-pulse">_</span>
        </p>
        <p className="mt-6 max-w-xl text-muted">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110">
            <Mail size={16} /> Get in touch
          </a>
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent">
            <Download size={16} /> Resume
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-line p-3 transition hover:border-accent hover:text-accent">
            <Github size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-line p-3 transition hover:border-accent hover:text-accent">
            <Linkedin size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="overflow-hidden rounded-xl border border-line bg-surface font-mono text-xs shadow-[0_0_60px_-20px_var(--color-accent)] sm:text-sm"
      >
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-amber/80" />
          <span className="h-3 w-3 rounded-full bg-ok/80" />
          <span className="ml-2 text-muted">~/platform</span>
        </div>
        <div className="space-y-1 p-4 leading-relaxed">
          <p><span className="text-ok">$</span> kubectl get clusters</p>
          <p className="text-muted">NAME&nbsp;&nbsp;&nbsp;&nbsp;CLOUD&nbsp;&nbsp;STATUS</p>
          <p>gke-*&nbsp;&nbsp;&nbsp;GCP&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ok">Healthy</span></p>
          <p>eks-*&nbsp;&nbsp;&nbsp;AWS&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-ok">Healthy</span></p>
          <p className="pt-2"><span className="text-ok">$</span> argocd app list | wc -l</p>
          <p className="text-accent">300+ microservices synced</p>
          <p className="pt-2"><span className="text-ok">$</span> terraform plan</p>
          <p className="text-muted">No changes. Infrastructure matches configuration.</p>
        </div>
      </motion.div>

      <dl className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-4">
        {profile.stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-line bg-surface/70 p-4">
            <dt className="font-mono text-2xl font-bold text-accent sm:text-3xl">{s.value}</dt>
            <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
