import { certificates } from '../data/certificates'
import { education } from '../data/education'
import { skills } from '../data/skills'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About & Skills" cmd="whoami">
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <img
          src="/images/aboutme.jpg"
          alt="Sarvagya Singh"
          loading="lazy"
          className="aspect-square w-full max-w-xs rounded-xl border border-line object-cover"
        />
        <div className="space-y-8">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="mb-3 font-mono text-sm text-muted"># {g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-xs sm:text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface/70 p-6">
          <h3 className="mb-4 font-mono text-sm text-accent">certifications</h3>
          <ul className="space-y-3">
            {certificates.map((c) => (
              <li key={c.title} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ok" />
                <span>
                  {c.title}
                  <span className="block text-xs text-muted">{c.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-surface/70 p-6">
          <h3 className="mb-4 font-mono text-sm text-accent">education</h3>
          <p className="font-semibold">{education.degree}</p>
          <p className="text-sm text-muted">
            {education.school} · {education.period}
          </p>
          <p className="mt-3 text-sm">{education.detail}</p>
          <p className="mt-3 text-sm text-amber">{education.achievement}</p>
        </div>
      </div>
    </Section>
  )
}
