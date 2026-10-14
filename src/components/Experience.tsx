import { experience } from '../data/experience'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" title="Experience" cmd="git log --career">
      <ol className="space-y-8 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.company + e.period} className="relative">
            <span className="absolute top-2 -left-[31px] h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {e.title} <span className="text-accent">@ {e.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">
                {e.period}
                {e.location ? ` | ${e.location}` : ''}
              </p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted marker:text-accent">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
