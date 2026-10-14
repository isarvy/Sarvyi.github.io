import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['writing', 'Writing'],
  ['contact', 'Contact'],
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { pathname } = useLocation()
  const home = pathname === '/'

  useEffect(() => {
    if (!home) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [home])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-mono text-lg font-bold">
          sarvy<span className="text-accent">@</span>infra
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={home ? `#${id}` : `/#${id}`}
              className={`text-sm transition-colors hover:text-accent ${active === id ? 'text-accent' : 'text-muted'}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-bg px-4 py-3 md:hidden" aria-label="Mobile">
          {links.map(([id, label]) => (
            <a key={id} href={home ? `#${id}` : `/#${id}`} onClick={() => setOpen(false)} className="rounded px-2 py-3 text-muted hover:text-accent">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
