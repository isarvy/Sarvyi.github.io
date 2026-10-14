import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { posts } from '../content/posts'
import { Section } from './Section'

export function Writing() {
  return (
    <Section id="writing" title="Writing" cmd="cat ./blog/*.md">
      <ul className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`} className="group block h-full rounded-xl border border-line bg-surface/70 p-6 transition hover:border-accent">
              <time className="font-mono text-xs text-muted">{p.date}</time>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-accent">
                read <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
