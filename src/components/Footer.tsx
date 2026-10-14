import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
      © {new Date().getFullYear()} {profile.name} · built with React, TypeScript & Tailwind
    </footer>
  )
}
