import { ArrowLeft } from 'lucide-react'
import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../content/posts'

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
      <Link to="/#writing" className="inline-flex items-center gap-2 font-mono text-sm text-accent">
        <ArrowLeft size={16} /> back
      </Link>
      {post ? (
        <article className="mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-amber [&_blockquote]:pl-4 [&_blockquote]:text-muted [&_code]:font-mono [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:mb-1 [&_p]:my-4 [&_p]:text-muted [&_ul]:list-disc [&_ul]:pl-6">
          <time className="font-mono text-xs text-muted">{post.date}</time>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{post.title}</h1>
          <Markdown>{post.body}</Markdown>
        </article>
      ) : (
        <p className="mt-10 text-muted">Post not found.</p>
      )}
    </main>
  )
}
