import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  ['home', 'Home'],
  ['services', 'Services'],
  ['portfolio', 'Portfolio'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['about', 'About'],
  ['writing', 'Writing'],
  ['contact', 'Contact'],
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const home = useLocation().pathname === '/'

  useEffect(() => {
    if (!home) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [home])

  return (
    <div className="header">
      <Link to="/" className="logo">
        Sarvy<span className="blink">.</span>
      </Link>

      <button
        id="menu"
        className={`bx ${open ? 'bx-x' : 'bx-menu'}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      />

      <nav className={`navbar ${open ? 'active' : ''}`} aria-label="Primary">
        {links.map(([id, label]) => (
          <a
            key={id}
            href={home ? `#${id}` : `/#${id}`}
            className={home && active === id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}
