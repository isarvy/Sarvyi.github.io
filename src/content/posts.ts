// Markdown files in ./posts with frontmatter: title, date, summary
const raw = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  body: string
}

function parse(path: string, src: string): Post {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  const meta: Record<string, string> = {}
  m?.[1].split('\n').forEach((l) => {
    const i = l.indexOf(':')
    if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim()
  })
  return {
    slug: path.replace('./posts/', '').replace('.md', ''),
    title: meta.title ?? 'Untitled',
    date: meta.date ?? '',
    summary: meta.summary ?? '',
    body: m ? m[2] : src,
  }
}

export const posts: Post[] = Object.entries(raw)
  .map(([p, s]) => parse(p, s))
  .sort((a, b) => b.date.localeCompare(a.date))
